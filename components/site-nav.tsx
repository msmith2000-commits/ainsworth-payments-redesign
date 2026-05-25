import Link from "next/link";

export function SiteNav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur ${
        dark
          ? "bg-[rgba(10,14,26,0.85)] border-b border-white/10"
          : "bg-white/85 border-b border-[var(--color-line)]"
      }`}
    >
      <div className="wrap flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Wordmark variant={dark ? "light" : "dark"} />
        </Link>
        <div className="flex items-center gap-7 text-sm">
          <Link
            href="/agents"
            className={`hidden sm:inline ${
              dark ? "text-white/80 hover:text-white" : "text-[var(--color-ink-3)] hover:text-[var(--color-ink)]"
            }`}
          >
            For agents
          </Link>
          <Link
            href="/#how"
            className={`hidden md:inline ${
              dark ? "text-white/80 hover:text-white" : "text-[var(--color-ink-3)] hover:text-[var(--color-ink)]"
            }`}
          >
            How it works
          </Link>
          <Link
            href="/about"
            className={`hidden sm:inline ${
              dark ? "text-white/80 hover:text-white" : "text-[var(--color-ink-3)] hover:text-[var(--color-ink)]"
            }`}
          >
            About
          </Link>
          <Link href="/agents" className="btn btn-primary !py-2 !px-4 text-sm">
            Apply to be an agent
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Wordmark({ variant }: { variant: "light" | "dark" }) {
  const fg = variant === "light" ? "white" : "var(--color-ink)";
  return (
    <span
      className="font-semibold tracking-tight text-[1.05rem]"
      style={{ color: fg, letterSpacing: "-0.02em" }}
    >
      Ainsworth
      <span style={{ color: "var(--color-accent)" }}>.</span>
    </span>
  );
}
