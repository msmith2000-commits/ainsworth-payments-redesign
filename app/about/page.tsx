import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About — Ainsworth Payments",
  description:
    "Built by operators who have run distribution at acquirers, ISOs, and processors. The team behind the ISO built for agents.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav variant="dark" />
      <Hero />
      <Story />
      <Team />
      <ClosingCTA />
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-[var(--color-ink)] text-white">
      <div className="wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <span className="eyebrow eyebrow-on-dark">About</span>
        <h1 className="mt-5 text-[2.4rem] sm:text-5xl lg:text-[3.4rem] font-semibold tracking-[-0.025em] leading-[1.05] max-w-3xl">
          Built by operators.
          <span className="block text-white/55 font-normal">
            For agents who would rather close than chase.
          </span>
        </h1>
        <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-2xl">
          Ainsworth is a small team. Two principals, a focused engineering bench,
          many sponsor banks, and one sister platform that lets us underwrite
          differently than every other ISO in our tier.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section bg-white">
      <div className="wrap grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <span className="eyebrow">The story</span>
          <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            Why we exist.
          </h2>
        </div>
        <div className="space-y-5 text-[var(--color-ink-3)] text-[1.02rem] leading-relaxed max-w-3xl">
          <p>
            The ISO category is begging for a brand that sounds like a builder,
            not a consultant. Every competitor in our tier reads the same.
            Generic value props. Race-to-the-bottom residual language. Decades
            of combined experience. We refuse to add to that noise.
          </p>
          <p>
            We started Ainsworth because we had spent enough years inside the
            paper-and-PDF era of merchant services to know it could be a real
            product. Agents are technical enough to use software. Merchants are
            ready to fill out one form, not one per bank. Sponsor banks are ready to
            underwrite faster when the application arrives clean.
          </p>
          <p>
            And we own QuickRefund, a sister platform that intercepts disputes
            before they file. That changes what we can place. We can take harder
            verticals and clean them up after we win them.
          </p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section bg-[var(--color-paper-2)] border-y border-[var(--color-line)]">
      <div className="wrap">
        <span className="eyebrow">The team</span>
        <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.025em] leading-[1.1]">
          Two principals. Both run the work.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Bio
            name="Jeff Foster"
            role="CEO & Co-Founder"
            photo="/team/jeff.jpeg"
            body="30-year payments operator across merchant acquiring and high-risk processing. Built and scaled distribution at ISOs, PayFacs, and processors. Deep operational chops in chargebacks, fraud, and merchant portfolio risk. The person sponsor banks return calls from."
          />
          <Bio
            name="Mark Smith"
            role="Chief Commercial Officer"
            photo="/team/mark.jpeg"
            body="Founder of 3Cinteractive, one of the earliest mobile messaging and payments platforms. Acquired by Cisco. 3Ci ran billions of consumer interactions across mobile channels for enterprise payments and telecom. Now runs commercial strategy and builds the Ainsworth portal itself."
          />
        </div>
      </div>
    </section>
  );
}

function Bio({
  name,
  role,
  photo,
  body,
}: {
  name: string;
  role: string;
  photo: string;
  body: string;
}) {
  return (
    <div className="card flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <Image
          src={photo}
          alt={name}
          width={88}
          height={88}
          className="rounded-full object-cover border-2 border-[var(--color-line)]"
        />
        <div>
          <div className="text-[1.2rem] font-semibold tracking-tight">{name}</div>
          <div
            className="text-[0.72rem] uppercase tracking-[0.14em] font-semibold mt-1"
            style={{ color: "var(--color-accent)" }}
          >
            {role}
          </div>
        </div>
      </div>
      <p className="text-[var(--color-muted)] leading-relaxed text-[0.97rem]">
        {body}
      </p>
    </div>
  );
}

function ClosingCTA() {
  return (
    <section className="section bg-white">
      <div className="wrap text-center">
        <h2 className="text-[1.9rem] sm:text-[2.3rem] font-semibold tracking-[-0.025em] leading-[1.1] max-w-2xl mx-auto">
          That is the team. Now show us your book.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/agents" className="btn btn-primary">
            Apply to be an agent
            <span aria-hidden>→</span>
          </Link>
          <Link href="/" className="btn btn-ghost">
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
