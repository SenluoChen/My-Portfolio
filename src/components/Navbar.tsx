import React from "react";
import "../css/navbar.css";

// ...existing code...

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="navbar-link">
      {children}
      <span aria-hidden className="navbar-link-underline" />
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

  return (
    <div className={`navbar-wrap${scrolled ? " scrolled" : ""}`}>
  <div className="navbar-inner">
    <div className="navbar-brand-wrap">
      <div className="navbar-brand">Senluo Chen</div>
    </div>

    <nav className="navbar-nav" aria-label="Primary">
  <LinkItem href="#about">About</LinkItem>
  <LinkItem href="#projects">Projects</LinkItem>
  <LinkItem href="#posts"><b>Posts</b></LinkItem>
  <LinkItem href="#contact">Contact</LinkItem>
    </nav>

    <div className="navbar-right" aria-hidden /> 
  </div>
</div>

  );
}
