import { ImageResponse } from "next/og";

// Social-share card (Slack, iMessage, LinkedIn, X). 1200x630 is the standard
// OG size. Dark navy ground with the wordmark + the locked tagline.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ainsworth Payments — Built for the agents who close";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e1a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* subtle accent rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            Ainsworth<span style={{ color: "#3b82f6" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#93a1c0",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginTop: 8,
            }}
          >
            A new kind of ISO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Built for the agents who close.
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 400,
              color: "#5b6b8c",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Not the agents who paper-shuffle.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#93a1c0",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              background: "#2BC000",
            }}
          />
          One application across our banking network. Cleaner accounts via
          QuickRefund.
        </div>
      </div>
    ),
    { ...size }
  );
}
