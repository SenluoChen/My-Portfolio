import React from "react";
import type { Post } from "../data/posts";

export default function PostModal({
  post,
  onClose,
}: { post: Post; onClose: () => void }) {
  if (!post) return null;

  const overlay: React.CSSProperties = {
    position: "fixed", inset: 0, background: "rgba(2,6,23,0.75)", zIndex: 1000,
    display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
  };
  const modal: React.CSSProperties = {
    background: "#0b1220", color: "#dbe2ea",
    border: "1px solid rgba(148,163,184,0.18)", borderRadius: 16,
    width: "min(920px, 92vw)", maxHeight: "84vh", overflow: "auto",
    boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
  };
  const header: React.CSSProperties = {
    padding: "20px 24px", borderBottom: "1px solid rgba(148,163,184,0.12)",
    position: "sticky", top: 0, background: "#0b1220", zIndex: 1,
  };
  const title: React.CSSProperties = { margin: 0, fontSize: 24, lineHeight: "32px", fontWeight: 900, letterSpacing: -0.2 };
  const meta: React.CSSProperties = { color: "#9fb0c3", fontSize: 12, marginTop: 6 };
  const body: React.CSSProperties = { padding: "20px 24px" };
  const paragraph: React.CSSProperties = { margin: "0 0 16px 0", lineHeight: "30px", fontSize: 16, color: "#c7d3e0" };
  const closeBtn: React.CSSProperties = {
    position: "absolute", right: 16, top: 16, background: "transparent", color: "#e2e8f0",
    border: "1px solid rgba(148,163,184,0.25)", borderRadius: 10, padding: "6px 10px", cursor: "pointer",
  };

  const paragraphs = post.content.split(/\n{2,}/g);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div style={overlay} role="dialog" aria-modal="true" aria-label={post.title} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        <div style={header}>
          <h3 style={title}>{post.title}</h3>
          <div style={meta}>{new Date(post.date).toLocaleString()}</div>
          <button style={closeBtn} onClick={onClose} aria-label="Close">Close</button>
        </div>
        <div style={body}>
          {paragraphs.map((p, i) => (
            <p key={i} style={paragraph}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
