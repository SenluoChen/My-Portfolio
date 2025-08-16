import React from "react";
import { Section, title, bar, text } from "./Section";


export default function About() {
  return (
    <Section id="about">
      <h2 style={title}>About</h2>
      <hr style={bar} />
      <p style={text}>
        Passionate about AI and computer science, I create solutions to improve daily life and aim to found my own company. Interested in AI innovation? Let’s connect!
      </p>
    </Section>
  );
}
