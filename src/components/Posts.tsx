import React from "react";
import { posts as raw, type Post } from "../data/posts";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import { Section, title as sectionTitle, bar as sectionBar } from "./Section";

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
    <Section id="posts">
      <h2 style={sectionTitle}>Tech Reflections</h2>
      <p style={subtitle}>寫下我在工程、產品與效能上的觀察與實戰。</p>
      <hr style={sectionBar} />

      <div style={grid}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} onOpen={setActive} />
        ))}
      </div>

      {active && <PostModal post={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
