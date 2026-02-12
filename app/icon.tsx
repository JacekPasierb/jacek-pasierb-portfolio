import {ImageResponse} from "next/og";

export const size = {width: 32, height: 32};
export const contentType = "image/png";

/**
 * Favicon – generowany w buildzie. Dla PWA dodaj icon-192.png i icon-512.png do public/.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          background: "#0a0a0c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#3b82f6",
          border: "2px solid rgba(59, 130, 246, 0.5)",
          borderRadius: 6,
        }}
      >
        JP
      </div>
    ),
    {...size}
  );
}
