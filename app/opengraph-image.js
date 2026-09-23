import { ImageResponse } from "next/og";

// Required so the image is generated at build time for the static export.
export const dynamic = "force-static";

export const alt = "ShiftKal — Wake up for every shift, sleep enough between them";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand mark (outlined calendar + alarm bell), embedded as a data-URI SVG so Satori rasterizes it.
const MARK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 1024 1024">
      <rect width="1024" height="1024" rx="224" fill="#000000"/>
      <g stroke="#F5B33C" stroke-width="52" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M300 220 H700 A120 120 0 0 1 820 340 V700 A120 120 0 0 1 700 820 H300 A120 120 0 0 1 180 700 V340 A120 120 0 0 1 300 220 Z"/>
        <line x1="330" y1="220" x2="670" y2="220"/>
        <line x1="360" y1="150" x2="360" y2="290"/>
        <line x1="640" y1="150" x2="640" y2="290"/>
      </g>
      <g fill="#F5B33C">
        <rect x="300" y="430" width="96" height="96" rx="26"/>
        <rect x="452" y="430" width="96" height="96" rx="26"/>
        <rect x="604" y="430" width="96" height="96" rx="26"/>
        <rect x="300" y="590" width="96" height="96" rx="26"/>
        <rect x="452" y="590" width="96" height="96" rx="26"/>
        <path d="M770 560 C688 560 640 612 640 700 C640 754 624 792 596 820 C582 834 592 858 612 858 H928 C948 858 958 834 944 820 C916 792 900 754 900 700 C900 612 852 560 770 560 Z"/>
        <path d="M732 892 A46 40 0 0 0 808 892 Z"/>
      </g>
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
            ShiftKal
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
            Your shifts, your alarms, your sleep
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
            Your whole rota&nbsp;&nbsp;·&nbsp;&nbsp;Reliable alarms&nbsp;&nbsp;·&nbsp;&nbsp;For iPhone
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
