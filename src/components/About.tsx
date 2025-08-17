import React from "react";
import { Section } from "./Section";
import "../css/hero.css";


export default function About() {
  return (
    <Section id="about" style={{ scrollMarginTop: 120 }}>
      <h2 className="hero-title" style={{ scrollMarginTop: 120 }}>About</h2>
      <hr className="hero-bar" />
      <p className="hero-text">
         I’m a self-taught software engineer passionate about full-stack development. I primarily work with JavaScript/TypeScript, and also use Python and AWS for backend and cloud solutions. Currently, I’m focusing on LLM technologies and developing multiple projects that bring AI into everyday applications - the very force that will power our future !!
      </p>
    </Section>
  );
}
