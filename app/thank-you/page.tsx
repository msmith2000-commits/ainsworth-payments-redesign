import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Thanks — Ainsworth Payments",
  robots: { index: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const isMerchant = type === "merchant";

  return (
    <>
      <SiteNav variant="dark" />
      <section className="bg-[var(--color-ink)] text-white">
        <div className="wrap pt-24 pb-28 md:pt-32 md:pb-36 max-w-2xl">
          <span className="eyebrow eyebrow-on-dark">Application received</span>
          <h1 className="mt-5 text-[2.4rem] sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.05]">
            Got it. We&apos;ll be in touch.
          </h1>
          <p className="mt-7 text-lg text-white/70 leading-relaxed">
            {isMerchant
              ? "Mark or Jeff reads every direct application personally. Expect a response within one business day. If we can place you, we'll send a portal login to get started. If we can't, we'll tell you straight and tell you what would change the answer."
              : "Mark reads every agent application personally. Expect a response within one business day, with an honest yes or no and a reason."}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary">
              Back to home
              <span aria-hidden>→</span>
            </Link>
            <Link href="/about" className="btn btn-ghost-dark">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
