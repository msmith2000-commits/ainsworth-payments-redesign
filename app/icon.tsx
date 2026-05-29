import { ImageResponse } from "next/og";

// Programmatic favicon — a branded navy square with a white "A" monogram and
// the accent dot from the wordmark. Stand-in until a designer supplies a
// square icon cut from the actual Ainsworth "A" logomark.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1e3d",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          borderRadius: 6,
        }}
      >
        A<span style={{ color: "#3b82f6" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
