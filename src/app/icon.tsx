import { ImageResponse } from "next/og";

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
          background: "#102a2e",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#f4f8f7",
              fontSize: 20,
              fontWeight: 800,
              lineHeight: 1,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: -1,
            }}
          >
            R
          </span>
          <div
            style={{
              marginTop: 2,
              width: 12,
              height: 2,
              borderRadius: 2,
              background: "#00d6c0",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
