import React from "react";
import ProjectCard from "./ProjectCard";
import { projects as raw } from "../data/projects";

const headerWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6, // 標題與說明距離更緊湊
  marginBottom: 18,
};

const title: React.CSSProperties = {
  margin: 0,
  color: "#f1f5f9",
  fontSize: 28,
  lineHeight: "36px",
  letterSpacing: -0.2,
  fontWeight: 800,
  textAlign: "left",
};

const subtitle: React.CSSProperties = {
  margin: 0,
  color: "#94a3b8",
  fontSize: 16,
  lineHeight: "26px",
  textAlign: "left",
  maxWidth: 820, // 文字長度控制更好讀
};

const bar: React.CSSProperties = {
  width: 88,
  height: 2,
  background: "rgba(148,163,184,0.35)",
  border: "none",
  margin: "14px 0 28px 0",
};

const baseGrid: React.CSSProperties = {
  display: "grid",
  columnGap: 28, // 左右間距保持
  rowGap: 60,    // 上下間距加大
  alignItems: "stretch",
};

// 卡片 hover wrapper（只負責浮起與陰影，不改 padding/邊框，避免雙框）
const cardWrap: React.CSSProperties = {
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  borderRadius: 12,
};
const cardHover: React.CSSProperties = {
  transform: "translateY(-6px)",
  boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
};

export default function Projects() {
  const projects = Array.isArray(raw) ? raw.filter(Boolean) : [];

  // < 760px：1 欄；>= 760px：2 欄（固定兩欄）
  const [oneCol, setOneCol] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 760 : false
  );
  React.useEffect(() => {
    const onResize = () => setOneCol(window.innerWidth < 760);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const grid: React.CSSProperties = {
    ...baseGrid,
    gridTemplateColumns: oneCol ? "1fr" : "repeat(2, minmax(0, 1fr))",
  };

  return (
    <section id="projects" aria-label="Projects">
      <div style={headerWrap}>
        <h2 style={title}>Projects</h2>
        <p style={subtitle}>
          Selected work — product-focused builds with clean architecture and measurable impact.
        </p>
      </div>
      <hr style={bar} />

      <div style={grid}>
        {projects.map((p) => (
          <div
            key={p.title}
            style={cardWrap}
            onMouseEnter={(e) =>
              Object.assign((e.currentTarget as HTMLElement).style, cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign((e.currentTarget as HTMLElement).style, cardWrap)
            }
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
