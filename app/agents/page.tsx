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
  // Form posts to formsubmit.co for v1. We can swap to a route handler that
  // uses Resend later without changing the markup.
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

        <form
          action="https://formsubmit.co/mark@ainsworthpayments.com"
          method="POST"
          className="card"
        >
          <input type="hidden" name="_subject" value="New Ainsworth agent application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://ainsworthpayments.com/agents?submitted=true"
          />
          <input type="text" name="_honey" style={{ display: "none" }} aria-hidden />

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
