import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SEO } from "@/lib/seo/site";

export const alt =
  "Flipia — Mémoire & Pouvoirs, le jeu de mémoire en duel sur Android";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #F0EDFB 0%, #FAF1F1 55%, #E8F1FE 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <img src={`data:image/png;base64,${logo}`} width={96} height={96} alt="" />
          <span style={{ fontSize: 72, fontWeight: 700, color: "#3B309E" }}>
            Flipia
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: 58,
            fontWeight: 700,
            color: "#1A1C17",
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          Retrouve les paires. Déclenche tes pouvoirs. Domine le duel.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: 30,
            color: "#474553",
            maxWidth: "880px",
          }}
        >
          {SEO.fr.shortDescription}
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: "44px",
            padding: "16px 36px",
            borderRadius: "999px",
            background: "#3B309E",
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          Gratuit sur Google Play
        </div>
      </div>
    ),
    size,
  );
}
