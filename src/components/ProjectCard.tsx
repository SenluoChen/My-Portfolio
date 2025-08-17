import React from "react";
import type { Project } from "../data/projects";

type Props = { project: Project };

const cardBase: React.CSSProperties = {
  position: "relative",
  borderRadius: 16,
  padding: 22,
  paddingBottom: 28,
  textAlign: "left",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "default",

  // 現代感背景：深藍雙漸層 + 內陰影
  background:
    "linear-gradient(180deg, rgba(15,27,47,0.96) 0%, rgba(15,27,47,0.90) 100%), radial-gradient(120% 80% at 0% 0%, rgba(56,189,248,0.08) 0%, rgba(56,189,248,0) 70%)",
  border: "1px solid rgba(148,163,184,0.16)",
  boxShadow: "0 10px 26px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
  transition:
    "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease",
};

const topBarBase: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  height: 3,
  width: "100%",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  background: "linear-gradient(90deg,#38bdf8,#0ea5e9)",
  transformOrigin: "left center",
  transform: "scaleX(0)", // 預設縮起來
  transition: "transform 260ms ease",
  opacity: 0.95,
};

const h3Base: React.CSSProperties = {
  margin: "2px 0 6px",
  color: "#f6fbff",
  fontSize: 20,
  lineHeight: "28px",
  fontWeight: 800,
  letterSpacing: -0.2,
  transition: "color 0.18s ease",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const titleArrow: React.CSSProperties = {
  opacity: 0,
  transform: "translateX(-4px)",
  transition: "all 180ms ease",
  fontSize: 16,
  color: "#7dd3fc",
};

const desc: React.CSSProperties = {
  margin: "8px 0 14px",
  color: "#b6c3d4",
  fontSize: 15,
  lineHeight: "26px",
};

const tagsRow: React.CSSProperties = { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 };
const tag: React.CSSProperties = {
  fontSize: 12,
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(148,163,184,0.08)",
  border: "1px solid rgba(148,163,184,0.24)",
  color: "#e2e8f0",
  fontWeight: 500,
  transition: "filter 160ms ease, border-color 160ms ease",
};

const actions: React.CSSProperties = { display: "flex", gap: 10, marginTop: "auto" };
const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(148,163,184,0.25)",
  background: "rgba(2,6,23,0.28)",
  color: "#e5e7eb",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 0.2,
  transition: "transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease, color 160ms ease",
};

const focusRing: React.CSSProperties = {
  outline: "none",
  boxShadow:
    "0 0 0 3px rgba(14,165,233,0.35), 0 0 0 1px rgba(14,165,233,0.65) inset",
};

export default function ProjectCard({ project: p }: Props) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  // 移除 showActions 狀態，讓按鈕永遠顯示
  const primary = p.link || p.github;

  return (
    <article
      role={"group"}
      tabIndex={0}
      aria-label={`${p.title} project`}
      style={{
        ...cardBase,
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover
          ? "0 18px 40px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.03)"
          : cardBase.boxShadow,
        borderColor: hover ? "rgba(56,189,248,0.45)" : (cardBase.border as string),
        ...(focus ? focusRing : {}),
        cursor: "default",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {/* 動態頂部重點條 */}
      <div
        style={{
          ...topBarBase,
          transform: hover || focus ? "scaleX(1)" : topBarBase.transform,
        }}
      />

      {/* 標題 + 箭頭 */}
      <h3
        style={{
          ...h3Base,
          color: hover || focus ? "#7dd3fc" : (h3Base.color as string),
        }}
      >
        {p.title}
        <span
          aria-hidden
          style={{
            ...titleArrow,
            opacity: hover || focus ? 1 : 0,
            transform: hover || focus ? "translateX(0)" : titleArrow.transform,
          }}
        >
          → 
        </span>
      </h3>

      <p style={desc}>{p.description}</p>

      <div style={tagsRow}>
        {p.tags.map((t) => (
          <span
            key={t}
            style={tag}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLSpanElement).style.filter = "brightness(1.08)";
              (e.currentTarget as HTMLSpanElement).style.borderColor = "#60a5fa";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLSpanElement).style.filter = "";
              (e.currentTarget as HTMLSpanElement).style.borderColor =
                "rgba(148,163,184,0.24)";
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={actions}>
        {p.link && (
          <ButtonLink
            href={p.link}
            style={btnBase}
            gradient={false}
            animate={true}
          >
            Live
          </ButtonLink>
        )}
        {p.github && (
          <ButtonLink
            href={p.github}
            style={btnBase}
            gradient={false}
            animate={true}
          >
            GitHub
          </ButtonLink>
        )}
        {p.behance && (
          <ButtonLink
            href={p.behance}
            style={btnBase}
            gradient={false}
            animate={true}
          >
            Behance
          </ButtonLink>
        )}
      </div>
    </article>
  );
}

// 新增分離 hover 狀態的 ButtonLink 元件，並加上型別
interface ButtonLinkProps {
  href: string;
  style: React.CSSProperties;
  gradient: boolean;
  animate?: boolean;
  children: React.ReactNode;
}
function ButtonLink({ href, style, gradient, animate = true, children }: ButtonLinkProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        ...style,
        background: gradient && hover ? "linear-gradient(90deg,#38bdf8,#0ea5e9)" : style.background,
        color: gradient && hover ? "#06111d" : style.color,
        borderColor: hover ? "#38bdf8" : style.borderColor,
        filter: hover && animate ? "brightness(1.12)" : "none",
        transform: hover && animate ? "translateY(-1px) scale(1.06)" : "translateY(0) scale(1)",
        boxShadow: hover && animate ? "0 4px 16px rgba(56,189,248,0.18)" : "none",
        transition: animate ? 'all 160ms cubic-bezier(.4,0,.2,1)' : undefined,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={e => { if (animate) e.currentTarget.style.transform = 'scale(0.96)'; }}
      onMouseUp={e => { if (animate) e.currentTarget.style.transform = hover ? 'translateY(-1px) scale(1.06)' : 'translateY(0) scale(1)'; }}
    >
      {children}
    </a>
  );
}
