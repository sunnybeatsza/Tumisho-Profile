import React from "react";
import CV from "../../Assets/June_Resume_2026.pdf";
import video from "../../Assets/8084497-uhd_3840_2160_25fps_pavel_danilyuk.mp4";

export const Hero = () => {
  return (
    <main id="top" className="hero-bg">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal="up">
            Cybersecurity consultant · Software engineer
          </p>
          <h1
            id="hero-title"
            data-reveal="up"
            style={{ "--reveal-delay": "70ms" }}
          >
            Securing systems.
            <br />
            <span>Building better ones.</span>
          </h1>
          <p
            className="hero-intro"
            data-reveal="up"
            style={{ "--reveal-delay": "140ms" }}
          >
            I&apos;m Mohube Tumisho Makgeru, a Security+ certified engineer
            working across cybersecurity, DevOps, full-stack engineering, and
            infrastructure automation.
          </p>
          <div
            className="hero-actions"
            data-reveal="up"
            style={{ "--reveal-delay": "210ms" }}
          >
            <a className="button button-primary" href={CV} download>
              Download resume <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#work">
              View selected work <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div
            className="hero-socials"
            aria-label="Social links"
            data-reveal="up"
            style={{ "--reveal-delay": "280ms" }}
          >
            <a
              href="https://github.com/sunnybeatsza"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github" aria-hidden="true" />
              <span className="social-label">
                <strong>GitHub</strong>
                <small>@sunnybeatsza</small>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/tumisho-makgeru-742195214/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin" aria-hidden="true" />
              <span className="social-label">
                <strong>LinkedIn</strong>
                <small>Professional profile</small>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
