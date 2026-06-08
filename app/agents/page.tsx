import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Apply to be an agent — Ainsworth Payments",
  description:
    "Independent sales agents who write 3 to 10 deals a month belong here. Real dashboard, real automation, real banks. Apply in five minutes.",
};

export default function AgentsPage() {
  return (
    <>
      <SiteNav variant="dark" />
      <Hero />
      <WhatYouGet />
      <CompliancePreflight />
      <FitCheck />
      <ApplyForm />
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-[var(--color-ink)] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(43,192,0,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="wrap relative pt-20 pb-16 md:pt-28 md:pb-24">
        <span className="eyebrow eyebrow-on-dark">For agents</span>
        <h1 className="mt-5 text-[2.4rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.025em] leading-[1.05] max-w-3xl">
          Write more business.
          <span className="block text-white/55 font-normal">
            Move less paper.
          </span>
        </h1>
        <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-2xl">
          Ainsworth is the ISO built for independent sales agents. Three sponsor
          banks live, one canonical application across the network, a real
          dashboard that names the next action on every deal. You bring the
          relationships. We handle everything around the application.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#apply" className="btn btn-primary">
            Apply in five minutes
            <span aria-hidden>↓</span>
          </a>
          <Link href="/#how" className="btn btn-ghost-dark">
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    {
      title: "A dashboard that does the chasing for you",
      body: "Active book and setup queue side by side. Every merchant shows a stage, a percentage, and a literal next-action sentence. You stop guessing what to do next on every deal.",
      tag: "Pillar 1",
    },
    {
      title: "One application across our entire banking network",
      body: "Merchant fills one form. We pick the bank. We generate the MPA. No re-typing for each underwriter. No PDF email chains. No copying numbers from one app to another.",
      tag: "Pillar 2",
    },
    {
      title: "Your brand, not ours, in front of merchants",
      body: "Upload your logo. Set your display name. We can put your branding on merchant invite emails and on the merchant-side dashboard. The merchant experiences your business, with our infrastructure underneath.",
      tag: "Pillar 1",
    },
    {
      title: "QuickRefund baked in",
      body: "Our sister chargeback platform reduces VAMP across the cohort. That means our banks raise our limits, which means we approve your harder deals faster. Other ISOs cannot match this.",
      tag: "Pillar 3",
    },
    {
      title: "Push reminders without going through us",
      body: "Merchant stuck on a doc upload? Send them a nudge from your dashboard. No support ticket, no waiting for an Ainsworth rep to email them. Your relationship, your tools.",
      tag: "Pillar 1",
    },
    {
      title: "Same-day visibility on every submission",
      body: "When a bank approves, declines, or asks for more info, you see it the moment we do. Days-processing counter on every active merchant. Status anxiety, gone.",
      tag: "Pillar 1",
    },
  ];
  return (
    <section className="section bg-white">
      <div className="wrap">
        <span className="eyebrow">What you get</span>
        <h2 className="mt-4 text-[2.1rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-3xl">
          The features other ISOs talk about. Actually built.
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.title} className="card">
              <div className="mono mb-3">{it.tag}</div>
              <h3 className="text-[1.15rem] font-semibold tracking-tight leading-snug">
                {it.title}
              </h3>
              <p className="mt-3 text-[var(--color-muted)] leading-relaxed text-[0.97rem]">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompliancePreflight() {
  // Anchored at #compliance so the homepage strip can link directly here.
  // The tool itself lives behind agent auth in the merchant portal; this
  // section explains what an agent gets, not the rubric content itself.
  const findings: Array<{
    code: string;
    severity: "STOP" | "FLAG" | "REQUIRED";
    title: string;
    detail: string;
  }> = [
    {
      code: "A1",
      severity: "STOP",
      title: "Free trial converting to auto-billing without clear disclosure",
      detail:
        "FTC's negative-option rule penalizes hidden recurring charges. Card networks reject this at underwriting. Put recurring terms above the order button.",
    },
    {
      code: "B3",
      severity: "FLAG",
      title: "Disease-state claims on a structure/function product",
      detail:
        "DSHEA line. \"Treats arthritis\" needs to become \"supports joint comfort.\" Specific copy edits, rubric-cited.",
    },
    {
      code: "D2",
      severity: "REQUIRED",
      title: "Missing structure/function disclaimer",
      detail:
        "Baseline expectation. Underwriting catches this fast. One-line fix.",
    },
  ];

  return (
    <section
      id="compliance"
      className="section bg-[var(--color-ink)] text-white relative overflow-hidden scroll-mt-24"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="wrap relative grid lg:grid-cols-[1.05fr_1fr] gap-14 items-start">
        <div>
          <span className="eyebrow eyebrow-on-dark">Compliance pre-flight</span>
          <h2 className="mt-4 text-[2.1rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-2xl">
            Send cleaner deals. Get bigger limits.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            High-risk underwriting dies on the merchant&apos;s website, not on
            the merchant. Disease claims where there should be structure-function
            claims. Missing disclaimers. Reconstitution kits sold next to the
            product. Most of it is mechanically fixable. The merchant just
            doesn&apos;t know.
          </p>
          <p className="mt-4 text-white/55 leading-relaxed max-w-xl">
            Every Ainsworth agent gets a pre-flight tool that screens the
            merchant&apos;s site against a rubric built from 193 real FDA
            warning letters. Each finding cites the actual FDA quote and tells
            you exactly what to change. You ship the application clean. The
            bank approves faster. Your limits go up.
          </p>

          <div className="mt-9 grid sm:grid-cols-3 gap-4 max-w-xl">
            <Stat n="193" label="FDA warning letters" />
            <Stat n="56" label="rubric-coded issues" />
            <Stat n="2" label="verticals covered" />
          </div>

          <div className="mt-9 rounded-lg border border-white/10 bg-white/[0.03] p-5 max-w-xl">
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-white/45 font-semibold">
              Your merchant gets it too
            </div>
            <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
              Same tool, same findings, in their own dashboard. You stop being
              the bottleneck on every back-and-forth. The merchant cleans up
              what they can. You become the judgment layer: what is worth
              fighting, what to fix first, what the bank will actually flag.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 sm:p-6">
          <div className="flex items-center justify-between text-xs text-white/55 mb-4">
            <span className="mono">/partner/screen · nutra-v1.0</span>
            <span>3 findings</span>
          </div>
          <div className="rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/5 overflow-hidden">
            {findings.map((f) => (
              <div
                key={f.code}
                className="px-4 py-4 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <SeverityTag severity={f.severity} />
                  <span className="mono">{f.code}</span>
                </div>
                <div className="text-[0.98rem] font-medium text-white leading-snug">
                  {f.title}
                </div>
                <div className="text-[0.85rem] text-white/55 mt-1.5 leading-relaxed">
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[0.72rem] text-white/40">
            Sample output. Real findings cite the FDA letter by name.
          </div>
        </div>
      </div>
    </section>
  );
}

function SeverityTag({
  severity,
}: {
  severity: "STOP" | "FLAG" | "REQUIRED";
}) {
  // Each tag has both a color AND a label so it survives grayscale or
  // colorblind viewing. Mark is red-green colorblind; rubric output is
  // designed with this constraint.
  const styles: Record<
    "STOP" | "FLAG" | "REQUIRED",
    { bg: string; fg: string; border: string }
  > = {
    STOP: {
      bg: "rgba(220,38,38,0.12)",
      fg: "#fca5a5",
      border: "rgba(220,38,38,0.35)",
    },
    FLAG: {
      bg: "rgba(245,158,11,0.12)",
      fg: "#fbbf24",
      border: "rgba(245,158,11,0.35)",
    },
    REQUIRED: {
      bg: "rgba(37,99,235,0.12)",
      fg: "#93c5fd",
      border: "rgba(37,99,235,0.35)",
    },
  };
  const s = styles[severity];
  return (
    <span
      className="inline-flex items-center text-[0.65rem] font-bold tracking-[0.08em] px-2 py-0.5 rounded-md border"
      style={{ background: s.bg, color: s.fg, borderColor: s.border }}
    >
      {severity}
    </span>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-[1.6rem] font-semibold tracking-tight text-white tabular-nums">
        {n}
      </div>
      <div className="text-[0.7rem] uppercase tracking-[0.12em] text-white/45 mt-1 leading-tight">
        {label}
      </div>
    </div>
  );
}

function FitCheck() {
  return (
    <section className="section bg-[var(--color-paper-2)] border-y border-[var(--color-line)]">
      <div className="wrap grid md:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Is this you</span>
          <h2 className="mt-4 text-[1.9rem] sm:text-[2.2rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            You belong here if…
          </h2>
          <ul className="mt-7 space-y-3 text-[var(--color-ink-3)]">
            <Check>You write 3 to 10 deals a month and want to write more.</Check>
            <Check>You place high-risk merchants and want banks that say yes.</Check>
            <Check>You are tired of PDF applications and email chains.</Check>
            <Check>You want your name on the dashboard, not ours.</Check>
            <Check>You believe the right tools are worth more than an extra 5 basis points.</Check>
          </ul>
        </div>
        <div>
          <span className="eyebrow">Probably not us</span>
          <h2 className="mt-4 text-[1.9rem] sm:text-[2.2rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            Skip us if…
          </h2>
          <ul className="mt-7 space-y-3 text-[var(--color-ink-3)]">
            <Cross>You shop ISOs by residual rate first and tooling second.</Cross>
            <Cross>You write one deal a quarter and need a lot of hand-holding.</Cross>
            <Cross>You prefer phone-and-paper to a software workflow.</Cross>
            <Cross>You only place standard-risk retail, in person.</Cross>
          </ul>
          <p className="mt-6 text-sm text-[var(--color-muted)] leading-relaxed max-w-md">
            We would rather lose your application than waste your time. The
            pitch above is the pitch. If it doesn&apos;t fit, we are not the move.
          </p>
        </div>
      </div>
    </section>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="shrink-0 mt-1 w-4 h-4 rounded-full grid place-items-center text-white text-[0.62rem] font-bold"
        style={{ background: "var(--color-qr)" }}
      >
        ✓
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function Cross({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="shrink-0 mt-1 w-4 h-4 rounded-full grid place-items-center text-[var(--color-muted)] text-[0.62rem] font-bold border border-[var(--color-line-2)]"
      >
        ×
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function ApplyForm() {
  // Native form POST to /api/apply (Resend-backed). No client JS needed —
  // the route 303-redirects to /thank-you. form_type routes the email.
  return (
    <section id="apply" className="section bg-white">
      <div className="wrap grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <div>
          <span className="eyebrow">Apply</span>
          <h2 className="mt-4 text-[2.1rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            Tell us about your book.
          </h2>
          <p className="mt-5 text-[var(--color-muted)] leading-relaxed text-lg max-w-md">
            Mark Smith, our CCO, reads every application personally. Expect a
            response within one business day. If we are not a fit, we will tell
            you that and refer you somewhere honest.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <Step n="1" title="You apply">
              Form below. Two minutes if you know your numbers.
            </Step>
            <Step n="2" title="We respond">
              Within one business day. Honest yes or no, with a reason.
            </Step>
            <Step n="3" title="We onboard you">
              You get a partner login, your logo on the dashboard, your first
              merchant invite link.
            </Step>
            <Step n="4" title="You write business">
              We handle everything else.
            </Step>
          </div>
        </div>

        <form action="/api/apply" method="POST" className="card">
          <input type="hidden" name="form_type" value="agent" />
          {/* Honeypot — hidden from real users; bots fill it and get dropped. */}
          <input
            type="text"
            name="company_hp"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
            aria-hidden
          />

          <h3 className="text-[1.15rem] font-semibold tracking-tight">
            Agent application
          </h3>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Real questions. No marketing checkboxes.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="First name" name="first_name" placeholder="Mark" />
            <Field label="Last name" name="last_name" placeholder="Smith" />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@yourdomain.com" />
          <Field label="Phone" name="phone" type="tel" placeholder="(555) 555-5555" />
          <Field
            label="Company or DBA"
            name="company"
            placeholder="Smith Merchant Services"
            optional
          />

          <Select
            label="How many deals do you write per month?"
            name="deals_per_month"
            options={[
              "Fewer than 1",
              "1 to 3",
              "3 to 10",
              "10 to 25",
              "More than 25",
            ]}
          />

          <Select
            label="Where are you placing them today?"
            name="current_iso"
            options={[
              "Not currently placing",
              "Maverick",
              "2Accept",
              "Argyle",
              "FIS / Worldpay / TSYS",
              "Other ISO",
              "Direct to acquirer",
            ]}
          />

          <Field
            label="Primary verticals"
            name="verticals"
            placeholder="Nutra, telehealth, subscription, etc."
          />

          <div className="mt-1">
            <label className="block text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-muted)] mb-1.5">
              Anything we should know?{" "}
              <span className="text-[var(--color-muted-2)] font-normal normal-case tracking-normal">
                (optional)
              </span>
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="What is broken about your current setup. What would have to be true for you to switch."
              className="w-full rounded-md border border-[var(--color-line)] px-3.5 py-2.5 text-[0.95rem] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full justify-center mt-6">
            Submit application
            <span aria-hidden>→</span>
          </button>
          <p className="text-[0.78rem] text-[var(--color-muted)] mt-3 text-center">
            Your info goes straight to Mark&apos;s inbox. No CRM, no nurture sequence.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  optional?: boolean;
}) {
  return (
    <div className="mt-4 first:mt-0">
      <label
        htmlFor={name}
        className="block text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-muted)] mb-1.5"
      >
        {label}{" "}
        {optional ? (
          <span className="text-[var(--color-muted-2)] font-normal normal-case tracking-normal">
            (optional)
          </span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={!optional}
        className="w-full rounded-md border border-[var(--color-line)] px-3.5 py-2.5 text-[0.95rem] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="block text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-muted)] mb-1.5"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        defaultValue=""
        className="w-full rounded-md border border-[var(--color-line)] px-3.5 py-2.5 text-[0.95rem] focus:border-[var(--color-accent)] focus:outline-none transition-colors bg-white"
      >
        <option value="" disabled>
          Select an option…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="shrink-0 mono mt-1">{n}.</span>
      <div>
        <div className="font-semibold text-[var(--color-ink)]">{title}</div>
        <div className="text-[var(--color-muted)] mt-1 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
