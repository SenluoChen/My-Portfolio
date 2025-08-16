import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(148,163,184,0.12)",
        background: "linear-gradient(to right, #0b1628, #091321)", // 與主題一致
        textAlign: "center",
        padding: "28px 20px",
        fontFamily:
          "'Space Grotesk','Inter','Noto Sans TC','PingFang TC','Microsoft JhengHei',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif",
        fontSize: 14,
        lineHeight: "22px",
        letterSpacing: 0.4,
      }}
    >
      {/* Senluo Chen 漸層字體 */}
      <span
        style={{
          fontWeight: 800,
          fontSize: 15,
          background: "linear-gradient(90deg,#38bdf8,#06b6d4,#0ea5e9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        © {new Date().getFullYear()} Senluo Chen
      </span>

      <span style={{ margin: "0 6px", color: "#64748b" }}>·</span>

      {/* Paris 也用漸層字體 */}
      <span
        style={{
          fontWeight: 600,
          fontSize: 15,
          background: "linear-gradient(90deg,#38bdf8,#06b6d4,#0ea5e9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Paris
      </span>
    </footer>
  );
}
