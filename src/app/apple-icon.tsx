import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 40,
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
              fontSize: 110,
              fontWeight: 800,
              lineHeight: 1,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: -4,
            }}
          >
            R
          </span>
          <div
            style={{
              marginTop: 10,
              width: 56,
              height: 10,
              borderRadius: 6,
              background: "#00d6c0",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
