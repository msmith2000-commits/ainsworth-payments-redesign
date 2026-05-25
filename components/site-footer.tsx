import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="wrap py-14 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/ainsworth-logo.png"
            alt="Ainsworth Payments"
            width={800}
            height={225}
            className="h-8 w-auto [filter:brightness(0)_invert(1)]"
          />
          <p className="mt-4 text-sm text-white/60 max-w-sm leading-relaxed">
            The ISO built for agents who are tired of moving paper. One application
            across our entire banking network. Cleaner accounts via QuickRefund.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[0.68rem] uppercase tracking-[0.14em] text-white/40">
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
        </div>
        <FooterCol title="Site">
          <Link href="/agents">For agents</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/#flywheel">QuickRefund flywheel</Link>
          <Link href="/about">About</Link>
        </FooterCol>
        <FooterCol title="Network">
          <span className="text-white/80">Hagen Pay</span>
          <span className="text-white/80">Esquire Bank</span>
          <span className="text-white/80">Priority / CorduroPay</span>
          <span className="text-white/40">More in pipeline</span>
        </FooterCol>
        <FooterCol title="Contact">
          <a href="mailto:hello@ainsworthpayments.com">hello@ainsworthpayments.com</a>
          <Link href="/agents">Apply to be an agent</Link>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/45">
          <span>© 2026 Ainsworth Payments. All rights reserved.</span>
          <span>Built for the agents who close.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[0.7rem] tracking-[0.16em] uppercase text-white/40 font-semibold mb-3">
        {title}
      </div>
      <div className="flex flex-col gap-2 text-sm [&_a]:text-white/75 [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
