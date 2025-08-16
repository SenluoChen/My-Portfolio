import React from "react";
import { Section, title, bar, text, row, pill, primaryBtn, ghostBtn } from "./Section";

const h1: React.CSSProperties = { ...title, fontSize: 40, lineHeight: "48px" }; // Hero 標題略小於 56 也更穩

const orb: React.CSSProperties = {
  width: 112,
  height: 112,
  borderRadius: "50%",
  margin: "0 0 20px 0",
  background: "radial-gradient(circle at 30% 30%, #38bdf8 0%, #0ea5e9 45%, #0b1220 70%)",
  boxShadow: "0 22px 48px rgba(14,165,233,0.25)",
};

export default function Hero() {
  return (
    <Section>
      <div style={orb} />
      <h1 style={h1}>Software Engineer · Full-Stack</h1>
      <hr style={bar} />
      <p style={text}>
      Passionate about AI and computer science, I create solutions to improve daily life and aim to found my own company. Interested in AI innovation? Let’s connect!
      </p>

      <div style={row}>
        {["React", "TypeScript", "Python", "AWS", "CI/CD", "DX"].map((t) => (
          <span key={t} style={pill}>{t}</span>
        ))}
      </div>

      <div style={{ ...row, marginTop: 15 }}>
        <a href="#projects" style={{ textDecoration: "none" }}>
          <button style={primaryBtn}>See Projects</button>
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button style={ghostBtn}>GitHub</button>
        </a>
      </div>
    </Section>
  );
}
