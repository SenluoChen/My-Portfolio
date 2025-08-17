import React from "react";
import { Section } from "./Section";
import "../css/hero.css";
import "../css/section.css";

// ...existing code...

export default function Hero() {
  return (
    <Section className="hero-section">
  <div className="hero-orb" />
  <h1 className="hero-title">Software Engineer · Full-Stack</h1>
  <hr className="hero-bar" />
  <p className="hero-text">
     Hi, I’m Senluo !
I’m excited about AI and computer science, and I enjoy creating smart solutions that make life better. My goal is to build an AI-driven SaaS company. If you love AI too, let’s connect!
      </p>

      <div className="hero-row">
        {["React", "TypeScript", "Python", "AWS", "DX", "Project Management"].map((t) => (
          <span key={t} className="hero-pill">{t}</span>
        ))}
      </div>

 <div className="hero-row" style={{ marginTop: 22, display: "flex", gap: 12 }}>
  <a
    href="https://github.com/SenluoChen"
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
  >
    <button
      className="hero-primary-btn"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 18px",
        borderRadius: 12,
        border: "1px solid rgba(148,163,184,0.25)",
        background:
          "linear-gradient(180deg,#0b1220 0%, #0f1b2f 100%)",
        color: "#e5e7eb",
        fontWeight: 600,
        fontSize: 15,
        cursor: "pointer",
        transition: "all .2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#38bdf8";
        e.currentTarget.style.boxShadow =
          "0 4px 16px rgba(56,189,248,0.25)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(148,163,184,0.25)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <svg
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 1.5.6 1.5.9 1.5 2.5 1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.7.9.7 1.7v2.5c0 .3.2.7.8.6 4.6-1.6 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
      </svg>
      GitHub
    </button>
  </a>

<a
  href="https://www.behance.net/"
  target="_blank"
  rel="noreferrer"
  style={{ textDecoration: "none" }}
>
  <button
    className="hero-primary-btn"
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 18px",
      borderRadius: 12,
      border: "1px solid rgba(148,163,184,0.25)",
      background:
        "linear-gradient(180deg,#0b1220 0%, #0f1b2f 100%)",
      color: "#e5e7eb",
      fontWeight: 600,
      fontSize: 15,
      cursor: "pointer",
      transition: "all .2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#0ea5e9";
      e.currentTarget.style.boxShadow =
        "0 4px 16px rgba(14,165,233,0.25)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(148,163,184,0.25)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.5 9.3h-6.6v-1.3h6.6v1.3zm-6.7 5.6c0 .9.8 1.6 1.7 1.6.8 0 1.3-.3 1.5-1h1.6c-.2 1.5-1.3 2.6-3.1 2.6-2 0-3.3-1.3-3.3-3.3 0-2.1 1.2-3.5 3.2-3.5 2.2 0 3.2 1.5 3.2 3.6v.2h-4.8zm3-1c0-.8-.6-1.4-1.4-1.4-.9 0-1.4.6-1.4 1.4h2.8zM2 6h5.2c1.4 0 2.4.4 3 1 .5.5.7 1.2.7 2 0 1.1-.6 2-1.5 2.4 1.2.4 2 1.4 2 2.8 0 .9-.3 1.6-.9 2.2-.7.7-1.7 1.1-3 1.1H2V6zm5.3 5.2c.9 0 1.4-.5 1.4-1.3 0-.8-.5-1.2-1.4-1.2H3.9v2.5h3.4zm.2 4.4c1 0 1.6-.5 1.6-1.4s-.6-1.3-1.6-1.3H3.9v2.7h3.6z"/>
    </svg>
    Behance
  </button>
</a>
</div>

    </Section>
  );
}
