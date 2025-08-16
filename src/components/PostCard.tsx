import React from "react";
import type { Post } from "../data/posts";

export default function PostCard({
  post,
  onOpen,
}: { post: Post; onOpen: (p: Post) => void }) {
  const [hover, setHover] = React.useState(false);

  const card: React.CSSProperties = {
    background: "#0f1b2f",
    border: "1px solid rgba(148,163,184,0.16)",
    borderRadius: 16,
    padding: 20,
    boxShadow: hover ? "0 16px 34px rgba(0,0,0,0.34)" : "0 10px 26px rgba(0,0,0,0.28)",
    transform: hover ? "translateY(-4px)" : "translateY(0)",
    transition: "transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    textAlign: "left",
  };

  const title: React.CSSProperties = {
    margin: "2px 0 6px", color: "#f6fbff",
    fontSize: 20, lineHeight: "28px", fontWeight: 800, letterSpacing: -0.2,
  };

  const meta: React.CSSProperties = { color: "#9fb0c3", fontSize: 12, marginBottom: 8 };
  const excerpt: React.CSSProperties = { color: "#b5c2d2", fontSize: 15, lineHeight: "26px", margin: "6px 0 12px" };
  const tagsRow: React.CSSProperties = { display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" };
  const tag: React.CSSProperties = {
    fontSize: 12, padding: "6px 10px", borderRadius: 999,
    background: "rgba(148,163,184,0.10)", border: "1px solid rgba(148,163,184,0.22)", color: "#e2e8f0",
  };

  return (
    <article
      style={card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(post)}
      aria-label={`${post.title} article card`}
    >
      <h3 style={title}>{post.title}</h3>
      <div style={meta}>{new Date(post.date).toLocaleDateString()}</div>
      <p style={excerpt}>{post.excerpt}</p>
      <div style={tagsRow}>
        {post.tags.map((t) => <span key={t} style={tag}>{t}</span>)}
      </div>
    </article>
  );
}
