import { Resend } from "resend";

/**
 * Application intake for both the agent (/agents) and merchant (/merchants)
 * apply forms. Replaces the formsubmit.co dependency so delivery is in our
 * control. Native form POST → 303 redirect to /thank-you, so the forms work
 * without client JS.
 *
 * Routing:
 *   form_type=agent    → mark@ainsworthpayments.com
 *   form_type=merchant → mark@ainsworthpayments.com
 *   (Both go to mark@ for now — info@ isn't a confirmed-working mailbox yet.
 *   Subjects differ so the two are distinguishable in the inbox. Switch the
 *   merchant TO back to info@ once it's set up as a real Workspace alias/group.)
 *
 * Env required before going live:
 *   RESEND_API_KEY      — the Resend key (the portal's key works if its
 *                         verified sending domain covers ainsworthpayments.com)
 *   APPLY_FROM_EMAIL    — optional; defaults to applications@ainsworthpayments.com
 *                         (must be on a domain verified in that Resend account)
 *
 * If RESEND_API_KEY is absent the submission is logged to the server (Vercel
 * function logs) and the user still lands on /thank-you — so a missing key in
 * preview never silently 500s the form. Set the key before launch.
 */
export async function POST(req: Request): Promise<Response> {
  const form = await req.formData();
  const origin = new URL(req.url).origin;

  // Honeypot: real users never fill the hidden field. Bots do. Silently
  // accept (redirect) without sending so the bot gets no signal.
  if (String(form.get("company_hp") ?? "").trim() !== "") {
    return Response.redirect(`${origin}/thank-you`, 303);
  }

  const isAgent = String(form.get("form_type") ?? "agent") !== "merchant";
  // Both route to mark@ for now — info@ is not a confirmed-working mailbox.
  // The subject line (below) distinguishes agent vs merchant in the inbox.
  const to = "mark@ainsworthpayments.com";
  const subject = isAgent
    ? "New Ainsworth agent application"
    : "New direct merchant application";

  // Build a readable email body from the submitted fields, skipping internal
  // control fields. Labelize snake_case keys for the inbox.
  const lines: string[] = [];
  for (const [key, value] of form.entries()) {
    if (key === "form_type" || key === "company_hp") continue;
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    lines.push(`${labelize(key)}: ${trimmed}`);
  }
  const body = lines.join("\n");
  const replyTo = String(form.get("email") ?? "").trim() || undefined;

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.APPLY_FROM_EMAIL ||
    "Ainsworth Applications <applications@ainsworthpayments.com>";

  if (!apiKey) {
    console.warn(
      `[apply] RESEND_API_KEY not set — submission NOT emailed, logged instead:\nTo: ${to}\nSubject: ${subject}\n${body}`
    );
  } else {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to,
        subject,
        replyTo,
        text: body,
      });
    } catch (err) {
      // Don't 500 the applicant. Log so the lead is recoverable from Vercel logs.
      console.error(
        `[apply] Resend send failed — submission preserved in logs:\nTo: ${to}\n${body}`,
        err
      );
    }
  }

  return Response.redirect(
    `${origin}/thank-you?type=${isAgent ? "agent" : "merchant"}`,
    303
  );
}

function labelize(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
