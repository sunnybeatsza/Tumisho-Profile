import React from "react";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-cta">
          <p className="eyebrow">Have a role or project in mind?</p>
          <h2>Let&apos;s build something secure—and useful.</h2>
          <a
            className="button button-primary"
            href="https://www.linkedin.com/in/tumisho-makgeru-742195214/"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-bottom">
          <a className="wordmark" href="#top" aria-label="Back to top">
            MTM<span>/</span>
          </a>
          <p>© {new Date().getFullYear()} Mohube Tumisho Makgeru</p>
          <div className="footer-links">
            <a href="#education">Education</a>
            <a href="https://github.com/sunnybeatsza" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tumisho-makgeru-742195214/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
