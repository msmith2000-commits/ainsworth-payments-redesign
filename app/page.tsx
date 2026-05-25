import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteNav variant="dark" />
      <Hero />
      <ChallengeFrame />
      <Pillars />
      <HowItWorks />
      <Flywheel />
      <Network />
      <ClosingCTA />
      <SiteFooter />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="bg-[var(--color-ink)] text-white relative overflow-hidden">
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="wrap relative pt-20 pb-24 md:pt-28 md:pb-36 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <span className="eyebrow eyebrow-on-dark">A new kind of ISO</span>
          <h1 className="mt-5 text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-semibold tracking-[-0.025em] leading-[1.05]">
            Built for the agents who close.
            <span className="block text-white/55 font-normal tracking-[-0.02em]">
              Not the agents who paper-shuffle.
            </span>
          </h1>
          <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-xl">
            Every other ISO treats your job as filling out applications, chasing
            documents, and hoping the bank gets back to you. We treat your job
            as closing the next deal.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/agents" className="btn btn-primary">
              Apply to be an agent
              <span aria-hidden>→</span>
            </Link>
            <Link href="#how" className="btn btn-ghost-dark">
              See how it works
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <Stat value="3 banks" label="live underwriting" />
            <Stat value="1 application" label="across the network" />
            <Stat value="QuickRefund" label="sister platform" />
          </div>
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-semibold tracking-tight text-white">{value}</div>
      <div className="text-[0.72rem] uppercase tracking-[0.12em] text-white/45 mt-0.5">
        {label}
      </div>
    </div>
  );
}

function DashboardMock() {
  // Concrete proof of pillar 1: a static snapshot of what the agent dashboard
  // looks like. Two merchants, next-action column, percentage complete.
  const rows: Array<{
    name: string;
    vertical: string;
    stage: string;
    next: string;
    pct: number;
    tone: "blue" | "qr" | "muted";
  }> = [
    {
      name: "Iron Peak Peptides",
      vertical: "Nutra",
      stage: "Docs",
      next: "Awaiting bank statement",
      pct: 72,
      tone: "blue",
    },
    {
      name: "Saltbox Telehealth",
      vertical: "Healthcare",
      stage: "Ready to sign",
      next: "Send MPA for e-signature",
      pct: 92,
      tone: "qr",
    },
    {
      name: "Ridge Outfitters",
      vertical: "Retail",
      stage: "Tier 2",
      next: "Merchant filling intake",
      pct: 38,
      tone: "muted",
    },
  ];

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 sm:p-6"
      style={{ boxShadow: "0 30px 80px -30px rgba(37,99,235,0.35)" }}
    >
      <div className="flex items-center justify-between text-xs text-white/55 mb-4">
        <span className="mono">/partner/dashboard</span>
        <span>Active book · 3 merchants</span>
      </div>
      <div className="rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/5 overflow-hidden">
        <div className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.6fr] gap-3 px-4 py-3 text-[0.65rem] uppercase tracking-[0.14em] text-white/40 border-b border-white/5">
          <span>Merchant</span>
          <span>Stage</span>
          <span>Next action</span>
          <span className="text-right">% done</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.6fr] gap-3 px-4 py-3.5 text-sm border-b border-white/5 last:border-0 items-center"
          >
            <div>
              <div className="font-medium text-white">{r.name}</div>
              <div className="text-[0.7rem] text-white/40 mt-0.5">{r.vertical}</div>
            </div>
            <StageBadge stage={r.stage} tone={r.tone} />
            <div className="text-white/70 text-[0.82rem] leading-snug">{r.next}</div>
            <div className="text-right">
              <span className="font-semibold tabular-nums text-white">{r.pct}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[0.72rem] text-white/40">
        <span>Live in /partner — actual UI, not a mock.</span>
        <span className="mono">v1.0</span>
      </div>
    </div>
  );
}

function StageBadge({
  stage,
  tone,
}: {
  stage: string;
  tone: "blue" | "qr" | "muted";
}) {
  const bg =
    tone === "blue"
      ? "bg-[rgba(37,99,235,0.12)] text-[#93c5fd] border-[rgba(37,99,235,0.35)]"
      : tone === "qr"
        ? "bg-[rgba(43,192,0,0.10)] text-[var(--color-qr)] border-[rgba(43,192,0,0.35)]"
        : "bg-white/[0.05] text-white/55 border-white/10";
  return (
    <span
      className={`inline-flex items-center text-[0.7rem] font-medium px-2 py-1 rounded-md border ${bg}`}
    >
      {stage}
    </span>
  );
}

/* ─────────────────── CHALLENGE FRAME ─────────────────── */

function ChallengeFrame() {
  const lines = [
    {
      lead: "How fast can your current ISO take an application?",
      ours: "Ours does it in 10 minutes. One form. Any bank in our network.",
    },
    {
      lead: "Open your current ISO's portal. Tell me your next action on every deal.",
      ours: "We can. Our dashboard names the next action on every merchant, every day.",
    },
    {
      lead: "What happens when a merchant's chargebacks spike?",
      ours: "Our sister platform QuickRefund intercepts disputes before they file. The bank never sees the ratio damage.",
    },
  ];
  return (
    <section className="section bg-white">
      <div className="wrap">
        <span className="eyebrow">The honest question</span>
        <h2 className="mt-4 text-[2.1rem] sm:text-[2.6rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-3xl">
          Compare us on the work, not the pitch.
        </h2>
        <p className="mt-5 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Most ISO websites read the same. We won&apos;t. Here are three
          questions you can ask any ISO right now. The answer tells you who&apos;s
          actually built for agents.
        </p>

        <div className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {lines.map((q, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_1.2fr] gap-x-10 gap-y-3 py-7 items-baseline"
            >
              <div>
                <div className="mono mb-1">Q.0{i + 1}</div>
                <div className="text-[1.05rem] font-medium text-[var(--color-ink)] leading-snug">
                  {q.lead}
                </div>
              </div>
              <div className="text-[var(--color-ink-3)] text-[0.98rem] leading-relaxed">
                {q.ours}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PILLARS ─────────────────────── */

function Pillars() {
  // Three pillars verbatim from POSITIONING_STRATEGY.md.
  return (
    <section className="section bg-[var(--color-paper-2)] border-y border-[var(--color-line)]">
      <div className="wrap">
        <span className="eyebrow">Why Ainsworth</span>
        <h2 className="mt-4 text-[2.1rem] sm:text-[2.6rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-3xl">
          Three things every other ISO can&apos;t say honestly.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <Pillar
            n="01"
            title="For agents, by design"
            sub="Your workflow is the product, not your merchant's."
            body="A real agent dashboard. Active book and setup queue, side by side. Every merchant has a next-action column and a completion percentage. Your name and logo, not ours, on the dashboard and on merchant emails."
            tag="Proof: /partner/dashboard"
          />
          <Pillar
            n="02"
            title="Built clean, not bolted on"
            sub="Modern automation. Not paper digitized."
            body="One canonical application that works across every bank in our network. No re-typing for each underwriter. E-signature in the portal. The merchant sees the same dashboard you do, so they stop calling you for status."
            tag="Proof: shared intake → per-bank MPA"
            highlight
          />
          <Pillar
            n="03"
            title="The QuickRefund flywheel"
            sub="Cleaner accounts. Bigger limits. Better placement."
            body="No other ISO owns a sister chargeback platform. Our merchants stay below VAMP thresholds, which means our banks raise our limits, which means we place more of your deals, with harder verticals, faster."
            tag="Proof: VAMP reduction across the cohort"
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  n,
  title,
  sub,
  body,
  tag,
  highlight,
}: {
  n: string;
  title: string;
  sub: string;
  body: string;
  tag: string;
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
      <h3 className="text-[1.25rem] font-semibold tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-[var(--color-ink-3)] font-medium leading-snug">{sub}</p>
      <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed">
        {body}
      </p>
      <div className="mt-auto pt-4 border-t border-[var(--color-line)] mono">
        {tag}
      </div>
    </div>
  );
}

/* ─────────────────── HOW IT WORKS ─────────────────── */

function HowItWorks() {
  const steps = [
    {
      who: "You",
      what: "Send a signup link",
      detail:
        "Drop your branded link in a text, email, LinkedIn DM. Merchant clicks. They are in your book.",
    },
    {
      who: "Merchant",
      what: "Fills one application",
      detail:
        "Same form for every bank. Saves automatically. Their dashboard tells them what to do next. They stop calling you for status.",
    },
    {
      who: "Ainsworth",
      what: "Routes to the right bank",
      detail:
        "We pick the bank. We generate the MPA. We send for signature. We submit. You watch it move on the dashboard.",
    },
    {
      who: "You",
      what: "Close the next deal",
      detail:
        "Every merchant has a next-action and a percentage. Nothing falls through the cracks. Your time goes back to writing business.",
    },
  ];
  return (
    <section id="how" className="section bg-white">
      <div className="wrap">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-4 text-[2.1rem] sm:text-[2.6rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-3xl">
          Your job is to close. Our job is everything else.
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

/* ─────────────────────── FLYWHEEL ─────────────────────── */

function Flywheel() {
  return (
    <section id="flywheel" className="section bg-[var(--color-ink)] text-white">
      <div className="wrap grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <div>
          <span className="eyebrow eyebrow-on-dark">The flywheel</span>
          <h2 className="mt-4 text-[2.1rem] sm:text-[2.6rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            Every clean merchant makes the next one easier to place.
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.03]">
            <span className="text-[0.68rem] uppercase tracking-[0.14em] text-white/45">
              Sister platform
            </span>
            <Image
              src="/quickrefund-wordmark-white.svg"
              alt="QuickRefund"
              width={140}
              height={28}
              className="h-5 w-auto"
            />
          </div>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            QuickRefund intercepts disputes before they become chargebacks. The
            bank never sees the ratio damage. Across our book, that turns into
            bigger limits, looser underwriting, and harder verticals approved
            faster.
          </p>
          <p className="mt-4 text-white/55 leading-relaxed max-w-xl">
            No other ISO in our tier owns a chargeback platform. That is the
            moat.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <FlowStep
            n={1}
            title="Cleaner merchants"
            body="QuickRefund resolves disputes at the gateway. No chargeback filed."
            tone="blue"
          />
          <FlowArrow />
          <FlowStep
            n={2}
            title="Lower chargeback ratios"
            body="Aggregate VAMP across the Ainsworth book stays well under threshold."
            tone="qr"
          />
          <FlowArrow />
          <FlowStep
            n={3}
            title="Bigger bank limits"
            body="Our sponsor banks raise our caps because the cohort behaves."
            tone="blue"
          />
          <FlowArrow />
          <FlowStep
            n={4}
            title="Better placement"
            body="More deals approved. Harder verticals taken. Faster turnaround."
            tone="qr"
          />
        </div>
      </div>
    </section>
  );
}

function FlowStep({
  n,
  title,
  body,
  tone,
}: {
  n: number;
  title: string;
  body: string;
  tone: "blue" | "qr";
}) {
  const accent =
    tone === "blue"
      ? "border-[rgba(37,99,235,0.4)] text-[#93c5fd]"
      : "border-[rgba(43,192,0,0.4)] text-[var(--color-qr)]";
  return (
    <div className="flex items-start gap-4">
      <div
        className={`shrink-0 w-9 h-9 rounded-full grid place-items-center font-semibold border bg-white/[0.04] ${accent}`}
      >
        {n}
      </div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-white/60 mt-1 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="ml-[1.05rem] my-2 h-7 w-px bg-white/15" aria-hidden />
  );
}

/* ─────────────────────── NETWORK ─────────────────────── */

function Network() {
  return (
    <section className="section bg-[var(--color-paper-2)] border-y border-[var(--color-line)]">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <span className="eyebrow">The network</span>
            <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.025em] leading-[1.1]">
              Three banks. One application. Your choice goes to whichever underwriter wants the deal.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <BankCard
              name="Hagen Pay"
              role="Sponsor bank"
              status="Live"
            />
            <BankCard name="Esquire Bank" role="Sponsor bank" status="Live" />
            <BankCard
              name="Priority / CorduroPay"
              role="Sponsor bank"
              status="Live"
            />
          </div>
        </div>
        <p className="mt-10 text-sm text-[var(--color-muted)] max-w-2xl">
          Multi-bank is table stakes in the ISO category. What is not table stakes:
          your merchant fills one application, not three, and we route it to the
          bank most likely to approve it on day one.
        </p>
      </div>
    </section>
  );
}

function BankCard({
  name,
  role,
  status,
}: {
  name: string;
  role: string;
  status: string;
}) {
  return (
    <div className="card">
      <div className="text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-muted)] font-semibold">
        {role}
      </div>
      <div className="mt-2 text-[1.15rem] font-semibold tracking-tight">{name}</div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm">
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: "var(--color-qr)" }}
          aria-hidden
        />
        <span className="text-[var(--color-ink-3)]">{status}</span>
      </div>
    </div>
  );
}

/* ─────────────────── CLOSING CTA ─────────────────── */

function ClosingCTA() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <div
          className="rounded-2xl p-10 sm:p-14 text-white"
          style={{
            background:
              "linear-gradient(140deg, var(--color-navy) 0%, var(--color-ink-2) 100%)",
          }}
        >
          <span className="eyebrow eyebrow-on-dark">Now you</span>
          <h2 className="mt-4 text-[2rem] sm:text-[2.5rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-2xl">
            If you write 3 to 10 deals a month and you are sick of paperwork, we should talk.
          </h2>
          <p className="mt-5 text-white/65 text-lg max-w-xl leading-relaxed">
            Tell us about your book. We will show you the dashboard, walk through
            the QuickRefund flywheel, and tell you straight whether Ainsworth is
            the right move.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/agents" className="btn btn-primary">
              Apply to be an agent
              <span aria-hidden>→</span>
            </Link>
            <Link href="/about" className="btn btn-ghost-dark">
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
