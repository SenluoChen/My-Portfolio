// src/components/Section.tsx
import React from "react";

export const section: React.CSSProperties = {
  paddingTop: 96,
  paddingBottom: 96,
};

export const title: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#f8fafc",
  fontSize: 32,
  lineHeight: "40px",
  fontWeight: 900,
  letterSpacing: -0.2,
  textAlign: "left",
};

export const bar: React.CSSProperties = {
  width: 72,
  height: 2,
  background: "rgba(148,163,184,0.35)",
  border: "none",
  margin: "0 0 32px 0",
};

export const text: React.CSSProperties = {
  maxWidth: 820,
  color: "#c7d3e0",
  fontSize: 17,
  lineHeight: "30px",
  margin: "0 0 20px 0",
  textAlign: "left",
};

export const row: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  justifyContent: "flex-start",
};

export const pill: React.CSSProperties = {
  fontSize: 12,
  padding: "6px 10px",
  borderRadius: 999,
  color: "#e7edf5",
  background: "rgba(148,163,184,0.12)",
  border: "1px solid rgba(148,163,184,0.22)",
};

export const primaryBtn: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  background: "linear-gradient(90deg,#38bdf8,#0ea5e9)",
  color: "#06111d",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
  letterSpacing: 0.2,
};

export const ghostBtn: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  background: "transparent",
  color: "#e5eef8",
  border: "1px solid rgba(148,163,184,0.25)",
  cursor: "pointer",
  letterSpacing: 0.2,
};

// 小包裝元件：自帶上下 padding，可傳入 id/額外 style
export function Section(props: React.PropsWithChildren<{ id?: string; style?: React.CSSProperties }>) {
  const { id, style, children } = props;
  return (
    <section id={id} style={{ ...section, ...style }}>
      {children}
    </section>
  );
}
