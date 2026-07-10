import { ImageResponse } from "next/og";

// Required so the image is generated at build time for the static export.
export const dynamic = "force-static";

export const alt = "Shiftmate — Wake up for every shift, sleep enough between them";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand mark (the shift dial), embedded as a data-URI SVG so Satori rasterizes it.
const MARK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="15" fill="#0E0E11"/>
      <circle cx="32" cy="34" r="17" fill="none" stroke="#33333A" stroke-width="4"/>
      <path d="M15 34 A17 17 0 0 1 49 34" fill="none" stroke="#FFC24D" stroke-width="4" stroke-linecap="round"/>
      <path d="M49 34 A17 17 0 0 1 15 34" fill="none" stroke="#5FD0BC" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
      <line x1="32" y1="34" x2="24" y2="26" stroke="#E9DCC2" stroke-width="4" stroke-linecap="round"/>
      <circle cx="32" cy="34" r="3.4" fill="#E9DCC2"/>
      <rect x="28.5" y="9" width="7" height="6" rx="2" fill="#E9DCC2"/>
    </svg>`
  );

export default function OpengraphImage() {
  const spectrum = ["#FFC24D", "#FF7062", "#5FD0BC", "#74B6F5", "#E9DCC2"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E0E11",
          color: "#F2F2F5",
          padding: "72px 76px",
        }}
      >
        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={MARK} width={60} height={60} alt="" />
          <span style={{ fontSize: 40, fontWeight: 700, color: "#F2F2F5" }}>
            Shiftmate
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div
            style={{
              fontSize: 40,
              color: "#A3A3AC",
              letterSpacing: 2,
              marginBottom: 14,
            }}
          >
            The alarm that reads your rota
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            Wake up for every shift.
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            <span style={{ color: "#FFC24D" }}>Sleep enough</span>
            <div style={{ display: "flex", width: 22 }} />
            <span style={{ color: "#F2F2F5" }}>between them.</span>
          </div>
        </div>

        {/* footer: caption + shift-spectrum bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#A3A3AC" }}>
            Snap your rota&nbsp;&nbsp;·&nbsp;&nbsp;Reliable alarms&nbsp;&nbsp;·&nbsp;&nbsp;For iPhone
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {spectrum.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  flex: 1,
                  height: 16,
                  borderRadius: 8,
                  background: c,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
