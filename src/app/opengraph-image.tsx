import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/logo-data-uri";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CopyBrain — Your second brain for everything you copy.";

export default function OpengraphImage() {
  const logo = getLogoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#09090B",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(79,70,229,0.55), transparent 45%), radial-gradient(circle at 85% 15%, rgba(124,58,237,0.45), transparent 45%), radial-gradient(circle at 60% 90%, rgba(6,182,212,0.35), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <img src={logo} width={56} height={56} alt="" style={{ borderRadius: 14 }} />
          <span style={{ fontSize: 36, fontWeight: 700, color: "white" }}>
            CopyBrain
          </span>
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            maxWidth: 980,
            letterSpacing: -2,
          }}
        >
          Your second brain for everything you copy.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 820,
          }}
        >
          Fast. Private. Offline. Cross-platform clipboard timeline.
        </div>
      </div>
    ),
    { ...size }
  );
}
