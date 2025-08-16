import React from "react";

const wrapBase: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  borderBottom: "1px solid rgba(148,163,184,0.08)",
  transition:
    "background 240ms ease, backdrop-filter 240ms ease, padding 240ms ease, box-shadow 240ms ease",
  fontFamily:
    "'Space Grotesk','Inter','Noto Sans TC','PingFang TC','Microsoft JhengHei',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif",
};

const inner: React.CSSProperties = {
  width: "100%",
  padding: "0 40px",   // 左右保持留白
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const brandWrap: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexShrink: 0,       // 防止字被擠壓
};



const brand: React.CSSProperties = {
  fontWeight: 900,
  fontSize: 21,
  textTransform: "uppercase",
  letterSpacing: -0.5,
  background: "linear-gradient(90deg, #38bdf8, #06b6d4, #0ea5e9)", // 漸層藍青
  WebkitBackgroundClip: "text",   // 背景裁切到文字
  WebkitTextFillColor: "transparent", // 文字透明，顯示漸層
};


const nav: React.CSSProperties = {
  display: "flex",
  gap: 6,
  marginLeft: "auto",  // 確保導覽列跑到最右
};


const linkBase: React.CSSProperties = {
  position: "relative",
  color: "#cbd5e1",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: 10,
  fontSize: 15,
  letterSpacing: 0.2,
  transition: "color 160ms ease, background 160ms ease",
  outline: "none",
};

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  return (
    <a
      href={href}
      style={{
        ...linkBase,
        color: hover ? "#e2e8f0" : (linkBase.color as string),
        background: hover ? "rgba(148,163,184,0.08)" : "transparent",
        boxShadow: focus ? "0 0 0 3px rgba(56,189,248,0.35)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {children}
      {/* 底線滑入 */}
      <span
        aria-hidden
        style={{
          content: '""',
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 6,
          height: 2,
          borderRadius: 2,
          background: "linear-gradient(90deg,#38bdf8,#0ea5e9)",
          transform: hover || focus ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 180ms ease",
        }}
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap: React.CSSProperties = {
    ...wrapBase,
    padding: scrolled ? "10px 0" : "16px 0", // 高度變化
    background: scrolled ? "rgba(10,16,28,0.78)" : "#0b1220",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 8px 22px rgba(0,0,0,0.28)" : "none",
  };

  return (
    <div style={wrap}>
      <div style={inner}>
        <div style={brandWrap}>
          <div style={brand}>Senluo Chen</div>
        </div>

        <nav style={nav}>
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#projects">Projects</LinkItem>
          <LinkItem href="#posts">Posts</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
        </nav>
      </div>
    </div>
  );
}
