import React from "react";
import { Section } from "./Section";
import { motion } from "framer-motion";
import "../css/hero.css";

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      id="contact"
      style={{ scrollMarginTop: 120 }}
    >
      <Section>
        <div>
          <h2 className="hero-title" style={{ textAlign: "left", scrollMarginTop: 120 }}>
            Contact
          </h2>
          <hr className="hero-bar" style={{ marginLeft: 0 }} />

          {/* 兩欄容器：左說明、右表單（窄螢幕自動單欄） */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 55,
              alignItems: "start",
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {/* 左側：說明與快速聯絡 */}
            <div
              style={{
                color: "#bac6d3ff",
                textAlign: "left",
                marginLeft: 2,
              }}
            >
              <p
                style={{
                  margin: "8px 0 16px",
                  fontSize: 16,
                  lineHeight: "26px",
                  maxWidth: 640,
                }}
              >
                Have an idea or just want to say hi? Drop me a message and I’d be
                happy to chat !
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "14px 0 0",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ opacity: 0.8 }}
                  >
                    <path d="M12 12.713L1.2 6h21.6L12 12.713zM12 14.9L22.8 8v10.8H1.2V8L12 14.9z" />
                  </svg>
                  <a
                    href="mailto:hello@your-domain.com"
                    style={{
                      color: "#e5e7eb",
                      textDecoration: "none",
                    }}
                  >
                    ray191714@gmail.com
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ opacity: 0.8 }}
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 22 2 16.39 2 9.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                  <a
                    href="tel:+886912345678"
                    style={{
                      color: "#e5e7eb",
                      textDecoration: "none",
                    }}
                  >
                    +33 06 14 46 74 63
                  </a>
                </li>

                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ opacity: 0.8 }}
                  >
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
                  </svg>
                  <span>Based in Paris</span>
                </li>
              </ul>
            </div>

            {/* 右側：表單卡片 */}
            <div
              style={{
                position: "relative",
                borderRadius: 18,
                padding: 28,
                textAlign: "left",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background:
                  "linear-gradient(180deg, rgba(15,27,47,0.95) 0%, rgba(15,27,47,0.90) 100%), radial-gradient(120% 80% at 0% 0%, rgba(56,189,248,0.08) 0%, rgba(56,189,248,0) 70%)",
                border: "1px solid rgba(148,163,184,0.18)",
                boxShadow:
                  "0 8px 22px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                transition:
                  "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease, background 200ms ease",
                maxWidth: "100%",
                boxSizing: "border-box",
                overflow: "hidden",
                minWidth: 0,
              }}
            >
              <form
                action="https://formspree.io/f/mpwlgdgo"
                method="POST"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18, // 🔹 統一欄位間距
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#9fb0c3",
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    Name
                  </label>
                  <input
                    style={{
                      ...fieldBase,
                      ...(focusName ? fieldFocus : {}),
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      borderRadius: 14,
                      color: "#e5e7eb",
                      fontWeight: 500,
                    }}
                    name="name"
                    placeholder="Name"
                    required
                    onFocus={() => setFocusName(true)}
                    onBlur={() => setFocusName(false)}
                    aria-label="Your name"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#9fb0c3",
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    Email
                  </label>
                  <input
                    style={{
                      ...fieldBase,
                      ...(focusEmail ? fieldFocus : {}),
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      borderRadius: 14,
                    }}
                    name="email"
                    type="email"
                    placeholder="Email@example.com"
                    required
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    aria-label="Your email"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#9fb0c3",
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    style={{
                      ...fieldBase,
                      ...(focusMsg ? fieldFocus : {}),
                      minHeight: 160,
                      resize: "vertical",
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      borderRadius: 14,
                      color: "#e5e7eb", // 🔹輸入後的字顏色
                      fontWeight: 500,
                    }}
                    name="message"
                    placeholder="Let’s start a conversation!"
                    required
                    onFocus={() => setFocusMsg(true)}
                    onBlur={() => setFocusMsg(false)}
                    aria-label="Your message"
                  />
                </div>

                <button
                  style={{
                    ...btn,
                    ...(hover ? btnHover : {}),
                    ...(active ? btnActive : {}),
                    marginTop: 6,
                    borderRadius: 14, // 🔹 跟 input 一致
                  }}
                  type="submit"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onMouseDown={() => setActive(true)}
                  onMouseUp={() => setActive(false)}
                >
                  Send
                </button>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: 12,
                    marginTop: 12,
                    textAlign: "center",
                  }}
                >
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
        </div>
      </Section>
    </motion.section>
  );
}
