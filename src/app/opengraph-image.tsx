import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Theory Elite — Master Business Theory Through Quiz Battles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0A0A14 0%, #1a1033 50%, #0A0A14 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* App icon + name row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {/* Icon placeholder - rounded square */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              🎓
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "-0.02em",
              }}
            >
              Theory Elite
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Master Business Theory</span>
            <span>
              Through{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Quiz Battles
              </span>
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            1v1 Battles · Flashcards · Timed Quizzes · Daily Challenges
          </div>

          {/* Bottom bar */}
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              left: "80px",
              right: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                fontSize: "16px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <span>⭐ 4.9 Rating</span>
              <span>📚 Multiple Subjects</span>
              <span>🆓 Free to Download</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Available on iOS
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
