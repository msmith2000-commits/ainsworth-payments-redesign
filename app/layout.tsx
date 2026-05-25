import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ainsworth Payments — Built for the agents who close",
  description:
    "The ISO built for agents who are tired of moving paper. One application across our entire banking network. Real-time visibility on every deal. Cleaner accounts via QuickRefund.",
  openGraph: {
    title: "Ainsworth Payments",
    description:
      "Built for the agents who close. Not the agents who paper-shuffle.",
    type: "website",
    url: "https://ainsworthpayments.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainsworth Payments",
    description:
      "Built for the agents who close. Not the agents who paper-shuffle.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
