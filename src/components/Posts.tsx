import React from "react";
import { posts as raw, type Post } from "../data/posts";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import { Section } from "./Section";
import "../css/hero.css";

const subtitle: React.CSSProperties = {
  margin: "0 0 24px 0",
  color: "#9fb0c3",
  fontSize: 16,
  lineHeight: "26px",
  textAlign: "left",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
  gap: 24,
  alignItems: "stretch",
};

export default function Posts() {
  const posts = Array.isArray(raw) ? raw.filter(Boolean) : [];
  const [active, setActive] = React.useState<Post | null>(null);

  return (
    <Section id="posts" style={{ scrollMarginTop: 120 }}>
      <h2 className="hero-title" style={{ scrollMarginTop: 120 }}>Tech Reflections</h2>
      <p style={subtitle}>Some of my tech notes..</p>
      <hr className="hero-bar" />

      <div style={{ ...grid, maxWidth: 1000, margin: '0 auto' }}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} onOpen={setActive} />
        ))}
      </div>

      {active && <PostModal post={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
