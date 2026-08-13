import React from "react";
import ProfilePhoto from "../../Assets/Suit-Photo_Cropped.JPG";
import CV from "../../Assets/June_Resume_2026.pdf";

export const Hero = () => {
  return (
    <main id="top">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            Open to meaningful opportunities
          </div>

          <p className="eyebrow">Cybersecurity consultant · Software engineer</p>
          <h1 id="hero-title">
            Securing systems.
            <br />
            <span>Building better ones.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Mohube Tumisho Makgeru, a Security+ certified engineer
            working across cybersecurity, DevOps, full-stack engineering, and
            infrastructure automation.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={CV} download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#work">
              View selected work <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a
              href="https://github.com/sunnybeatsza"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tumisho-makgeru-742195214/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img src={ProfilePhoto} alt="Mohube Tumisho Makgeru" />
          </div>
          <figcaption>
            <span>Based in South Africa</span>
            <span>Security × Engineering</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};
