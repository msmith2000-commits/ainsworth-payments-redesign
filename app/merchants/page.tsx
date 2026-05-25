import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "For merchants — Ainsworth Payments",
  description:
    "Declined elsewhere? We place merchants in nutra, peptides, telehealth, and the categories most ISOs walk away from. Apply directly.",
};

export default function MerchantsPage() {
  return (
    <>
      <SiteNav variant="dark" />
      <Hero />
      <Pillars />
      <HowItGoes />
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
        className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 60%)",
        }}
      />
      <div className="wrap relative pt-20 pb-16 md:pt-28 md:pb-24">
        <span className="eyebrow eyebrow-on-dark">For merchants</span>
        <h1 className="mt-5 text-[2.4rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.025em] leading-[1.05] max-w-3xl">
          Declined elsewhere?
          <span className="block text-white/55 font-normal">
            We&apos;ve placed merchants like you.
          </span>
        </h1>
        <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-2xl">
          We work in the categories most ISOs walk away from. Nutra. Peptides.
          Telehealth. Digital goods. The verticals card networks call
          &quot;high-risk&quot; and your last processor called &quot;not a
          fit.&quot; If your business is real, you have revenue, and your
          website can survive underwriting, we can usually find a bank that
          says yes.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#apply" className="btn btn-primary">
            Apply directly
            <span aria-hidden>↓</span>
          </a>
          <Link href="#how" className="btn btn-ghost-dark">
            See how we work
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <span className="eyebrow">What you get</span>
        <h2 className="mt-4 text-[2.1rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-3xl">
          Access. Experience. Outcome.
        </h2>
        <p className="mt-5 text-[var(--color-muted)] leading-relaxed text-lg max-w-2xl">
          Three things that separate Ainsworth from the processor that just
          terminated you. Not adjectives. Specifics.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <Pillar
            n="01"
            kicker="Access"
            title="We approve where others decline."
            body="Multiple sponsor banks in our network, each with different appetites. Decades of underwriting relationships. When other ISOs send the same application to one bank and call it a day, we route it to the bank most likely to say yes. If you&apos;ve been declined elsewhere, that&apos;s often a routing problem, not a fitness problem."
          />
          <Pillar
            n="02"
            kicker="Experience"
            title="One application. Real visibility."
            body="Fill out one canonical application that works across every bank we partner with. Track your status in your own merchant dashboard. Get a clean checklist of what's missing. E-sign in the portal. No PDF chains in your inbox. No calling for updates."
            highlight
          />
          <Pillar
            n="03"
            kicker="Outcome"
            title="Cleaner accounts. Bigger limits."
            body="Our sister platform QuickRefund intercepts disputes before they become chargebacks. Your VAMP ratio stays clean. Your bank raises your limits over time. Your account stays open while others get terminated. The math compounds across the relationship."
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  n,
  kicker,
  title,
  body,
  highlight,
}: {
  n: string;
  kicker: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card flex flex-col gap-4 ${
        highlight
          ? "border-[var(--color-accent)] shadow-[0_20px_50px_-30px_rgba(37,99,235,0.5)]"
          : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="mono">{n}</span>
        <span className="h-px flex-1 bg-[var(--color-line)]" />
      </div>
      <div>
        <div
          className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold"
          style={{ color: "var(--color-accent)" }}
        >
          {kicker}
        </div>
        <h3 className="mt-2 text-[1.2rem] font-semibold tracking-tight leading-snug">
          {title}
        </h3>
      </div>
      <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function HowItGoes() {
  const steps = [
    {
      who: "You",
      what: "Apply directly",
      detail:
        "Form below. Five minutes if you have your basics ready: legal name, processing volume, what you sell, which processor terminated you (if any).",
    },
    {
      who: "Ainsworth",
      what: "We review and match",
      detail:
        "Mark or Jeff personally reads your application. We check fit against our current bank appetites, flag anything on your website that will trip underwriting, and tell you straight whether we can place you.",
    },
    {
      who: "You",
      what: "Send what we need",
      detail:
        "If we can place you, we send a portal login. Upload documents through a real interface. Sign your MPA in the portal. No PDF emails.",
    },
    {
      who: "Bank",
      what: "Underwrites and approves",
      detail:
        "We submit clean. You watch the status move in the portal. Most clean applications complete in days, not weeks.",
    },
  ];
  return (
    <section id="how" className="section bg-[var(--color-paper-2)] border-y border-[var(--color-line)]">
      <div className="wrap">
        <span className="eyebrow">How it goes</span>
        <h2 className="mt-4 text-[2.1rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-3xl">
          What happens when you apply.
        </h2>

        <ol className="mt-14 relative">
          <span
            aria-hidden
            className="absolute left-[1.05rem] top-3 bottom-3 w-px bg-[var(--color-line)]"
          />
          {steps.map((s, i) => (
            <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4 pb-10 last:pb-0">
              <div className="relative">
                <div className="w-[2.1rem] h-[2.1rem] rounded-full bg-[var(--color-ink)] text-white grid place-items-center text-sm font-semibold relative z-10">
                  {i + 1}
                </div>
              </div>
              <div className="pt-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="mono">{s.who}</span>
                  <h3 className="text-[1.2rem] font-semibold tracking-tight">
                    {s.what}
                  </h3>
                </div>
                <p className="mt-2 text-[var(--color-muted)] text-[0.98rem] leading-relaxed max-w-2xl">
                  {s.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ApplyForm() {
  // Direct-merchant form. Tags the submission with _source=direct so the
  // back-office can triage per Mark/Jeff's hybrid policy: big merchants
  // land in the house book, standard high-risk routes to an agent.
  return (
    <section id="apply" className="section bg-white">
      <div className="wrap grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <div>
          <span className="eyebrow">Apply</span>
          <h2 className="mt-4 text-[2.1rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            Tell us about your business.
          </h2>
          <p className="mt-5 text-[var(--color-muted)] leading-relaxed text-lg max-w-md">
            Mark or Jeff reads every direct application personally. Expect a
            response within one business day. If we can&apos;t place you, we
            will tell you that and tell you what specifically would change the
            answer.
          </p>
          <div className="mt-8 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper-2)] p-5 text-sm leading-relaxed text-[var(--color-ink-3)]">
            <strong className="block mb-1 text-[var(--color-ink)]">
              Already working with one of our agents?
            </strong>
            Use the link they sent you instead. It tags the application to
            their book so they get credit and they stay in the loop on status.
          </div>
        </div>

        <form
          action="https://formsubmit.co/info@ainsworthpayments.com"
          method="POST"
          className="card"
        >
          <input
            type="hidden"
            name="_subject"
            value="New direct merchant application"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://ainsworthpayments.com/merchants?submitted=true"
          />
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            aria-hidden
          />
          {/* Source tagging — used by back-office triage to separate direct
              inquiries from agent-routed leads. */}
          <input type="hidden" name="lead_source" value="direct" />

          <h3 className="text-[1.15rem] font-semibold tracking-tight">
            Direct merchant application
          </h3>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Concrete questions. We use the answers to figure out where you fit.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="First name" name="first_name" placeholder="John" />
            <Field label="Last name" name="last_name" placeholder="Doe" />
          </div>
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@yourbusiness.com"
          />
          <Field label="Phone" name="phone" type="tel" placeholder="(555) 555-5555" />
          <Field
            label="Legal business name"
            name="legal_name"
            placeholder="Acme Holdings LLC"
          />
          <Field
            label="DBA (if different)"
            name="dba"
            placeholder="Acme Supplements"
            optional
          />
          <Field
            label="Business website"
            name="website"
            type="url"
            placeholder="https://yourbusiness.com"
          />

          <Select
            label="Primary vertical"
            name="vertical"
            options={[
              "Nutraceuticals / Supplements",
              "Peptides",
              "Telehealth",
              "CBD / Hemp",
              "Subscription / Recurring",
              "Digital goods",
              "Other high-risk",
              "Standard risk",
            ]}
          />

          <Select
            label="Estimated monthly processing volume"
            name="monthly_volume"
            options={[
              "Under $25K",
              "$25K to $100K",
              "$100K to $500K",
              "$500K to $1M",
              "$1M to $5M",
              "Over $5M",
            ]}
          />

          <Select
            label="What's your current processor situation?"
            name="processor_status"
            options={[
              "Currently processing, want a better deal",
              "Currently processing, account at risk",
              "Account was terminated",
              "Declined by previous processor",
              "Haven't started yet, new business",
              "On MATCH list",
            ]}
          />

          <div className="mt-4">
            <label className="block text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-muted)] mb-1.5">
              Anything we should know?{" "}
              <span className="text-[var(--color-muted-2)] font-normal normal-case tracking-normal">
                (optional)
              </span>
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Tell us what happened with your last processor. What other ISOs have told you. What you're trying to accomplish."
              className="w-full rounded-md border border-[var(--color-line)] px-3.5 py-2.5 text-[0.95rem] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full justify-center mt-6">
            Submit application
            <span aria-hidden>→</span>
          </button>
          <p className="text-[0.78rem] text-[var(--color-muted)] mt-3 text-center">
            Goes straight to Mark and Jeff. Reviewed within one business day.
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
