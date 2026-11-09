import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

// Imagen que aparece cuando se comparte el link por WhatsApp, Facebook o LinkedIn.
export const alt = `${siteConfig.legalName}, abogados en ${siteConfig.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#F2F3EE",
          color: "#14231C",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 120,
            width: 3,
            background: "#8E2A2F",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px 80px 80px 170px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 34, color: "#5F6D65" }}>
            Estudio jurídico en {siteConfig.city}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 108, fontWeight: 700, lineHeight: 1.05 }}>
              {siteConfig.name}
            </div>
            <div style={{ display: "flex", fontSize: 40, marginTop: 28, color: "#1F4A3A" }}>
              Familia, laboral, sucesiones y más
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#8E2A2F" }}>
            Primera consulta sin cargo
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
