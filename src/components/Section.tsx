import "../css/section.css";
// src/components/Section.tsx
import React, { useEffect, useRef } from "react";

// 小包裝元件：自帶上下 padding，可傳入 id/額外 style
export function Section(props: React.PropsWithChildren<{ id?: string; style?: React.CSSProperties; className?: string }>) {
  const { id, style, className, children } = props;
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)";
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id={id} className={`section${className ? ' ' + className : ''}`} style={style} ref={sectionRef}>
      {children}
    </section>
  );
}
