import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/logo-data-uri";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const logo = getLogoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090B",
        }}
      >
        <img src={logo} width={180} height={180} alt="" />
      </div>
    ),
    { ...size }
  );
}
