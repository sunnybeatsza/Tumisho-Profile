import React from "react";

export const Navbar = () => {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Mohube Tumisho Makgeru — home">
          MTM<span>/</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>

        <a
          className="nav-cta"
          href="https://www.linkedin.com/in/tumisho-makgeru-742195214/"
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};
