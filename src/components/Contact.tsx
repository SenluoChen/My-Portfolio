import React from "react";
import { Section, title, bar } from "./Section";

const fieldBase: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.25)",
  background: "#0b1220",
  color: "#e5e7eb",
  outline: "none",
  fontSize: 16,
  lineHeight: "24px",
  letterSpacing: 0.1,
  transition: "border-color .2s ease, box-shadow .2s ease",
};
const fieldFocus: React.CSSProperties = {
  borderColor: "#38bdf8",
  boxShadow: "0 0 0 4px rgba(56,189,248,0.12)",
};

const btn: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(90deg,#38bdf8,#0ea5e9)",
  color: "#06111d",
  fontWeight: 800,
  cursor: "pointer",
  letterSpacing: 0.3,
  transition: "transform .06s ease, opacity .2s ease",
};
const btnHover: React.CSSProperties = { transform: "translateY(-1px)" };
const btnActive: React.CSSProperties = { transform: "translateY(0)" };

export default function Contact() {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focusName, setFocusName] = React.useState(false);
  const [focusEmail, setFocusEmail] = React.useState(false);
  const [focusMsg, setFocusMsg] = React.useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`
    );
    window.location.href = `mailto:hello@your-domain.com?subject=Portfolio%20Contact&body=${body}`;
  };

  return (
    <Section id="contact">
      <h2 style={{ ...title, textAlign: "left" }}>Contact</h2>
      <hr style={{ ...bar, marginLeft: 0 }} />

      {/* 兩欄容器：左說明、右表單（窄螢幕自動單欄） */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 24,
          alignItems: "start",
          maxWidth: 1000,
        }}
      >
        {/* 左側：說明與快速聯絡 */}
        <div style={{ color: "#9fb0c3" }}>
          <p
            style={{
              margin: "8px 0 16px",
              fontSize: 16,
              lineHeight: "26px",
              maxWidth: 640,
            }}
          >
            Have a project, collaboration idea, or just want to say hello?
            Drop a message—I usually reply within{" "}
            <span style={{ color: "#e5e7eb", fontWeight: 600 }}>24–48h</span>.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0" }}>
            <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: .8 }}>
                <path d="M12 12.713L1.2 6h21.6L12 12.713zM12 14.9L22.8 8v10.8H1.2V8L12 14.9z" />
              </svg>
              <a
                href="mailto:hello@your-domain.com"
                style={{ color: "#e5e7eb", textDecoration: "none" }}
              >
                hello@your-domain.com
              </a>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: .8 }}>
                <path d="M19 3H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
              <span>Based in Paris · Available for collaboration</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: .8 }}>
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
              </svg>
              <span>Europe/Paris (CET/CEST)</span>
            </li>
          </ul>
        </div>

        {/* 右側：表單卡片 */}
        <div
          style={{
            background: "linear-gradient(180deg,#0b1220,#091321)",
            border: "1px solid rgba(148,163,184,0.14)",
            boxShadow: "0 10px 24px rgba(2,6,23,0.35)",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <form onSubmit={onSubmit} style={{ maxWidth: 560, margin: "0 auto" }}>
            <label style={{ display: "block", color: "#9fb0c3", fontSize: 13, marginBottom: 6 }}>
              Name
            </label>
            <input
              style={{ ...fieldBase, ...(focusName ? fieldFocus : {}) }}
              name="name"
              placeholder="Your name"
              required
              onFocus={() => setFocusName(true)}
              onBlur={() => setFocusName(false)}
              aria-label="Your name"
            />

            <div style={{ height: 12 }} />

            <label style={{ display: "block", color: "#9fb0c3", fontSize: 13, marginBottom: 6 }}>
              Email
            </label>
            <input
              style={{ ...fieldBase, ...(focusEmail ? fieldFocus : {}) }}
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              onFocus={() => setFocusEmail(true)}
              onBlur={() => setFocusEmail(false)}
              aria-label="Your email"
            />

            <div style={{ height: 12 }} />

            <label style={{ display: "block", color: "#9fb0c3", fontSize: 13, marginBottom: 6 }}>
              Message
            </label>
            <textarea
              style={{
                ...fieldBase,
                ...(focusMsg ? fieldFocus : {}),
                minHeight: 160,
                resize: "vertical",
              }}
              name="message"
              placeholder="Tell me a bit about your idea or project..."
              required
              onFocus={() => setFocusMsg(true)}
              onBlur={() => setFocusMsg(false)}
              aria-label="Your message"
            />

            <div style={{ height: 14 }} />

            <button
              style={{
                ...btn,
                ...(hover ? btnHover : {}),
                ...(active ? btnActive : {}),
              }}
              type="submit"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onMouseDown={() => setActive(true)}
              onMouseUp={() => setActive(false)}
            >
              Send
            </button>

            <p style={{ color: "#64748b", fontSize: 12, marginTop: 10, textAlign: "center" }}>
              This form opens your email app with a pre-filled message.
            </p>
          </form>
        </div>
      </div>

      {/* 響應式：窄螢幕改為單欄 */}
      <style>{`
        @media (max-width: 860px) {
          #contact > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Section>
  );
}
