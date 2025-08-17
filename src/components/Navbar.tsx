import React from "react";
import "../css/navbar.css";

function LinkItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a href={href} className="navbar-link" onClick={e => { e.preventDefault(); if (onClick) onClick(); }}>
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

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`navbar-wrap${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-brand-wrap">
          <div className="navbar-brand">Senluo Chen</div>
        </div>

        <nav className="navbar-nav" aria-label="Primary">
          <LinkItem href="#hero" onClick={() => handleNav('hero')}>Hero</LinkItem>
          <LinkItem href="#about" onClick={() => handleNav('about')}>About</LinkItem>
          <LinkItem href="#projects" onClick={() => handleNav('projects')}>Projects</LinkItem>
          <LinkItem href="#contact" onClick={() => handleNav('contact')}>Contact</LinkItem>
        </nav>

        <div className="navbar-right" aria-hidden /> 
      </div>
    </div>
  );
}
