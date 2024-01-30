import React from "react";
import ProfilePhoto from "../../Assets/Profile1.jpg";
import CV from "../../Assets/Resume 2024.pdf";

export const Hero = () => {
  const openCV = () => {
    window.open(CV);
  };

  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={ProfilePhoto}
            alt="John Doe profile picture"
            className="rounded-5"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p2">Hello, I'm</p>
          <h1 className="title text-light">Mohube Tumisho Makgeru</h1>
          <p className="section__text__p2">Full-stack developer</p>
          <div className="btn-container">
            <button className="btn btn-primary" onClick={openCV}>
              Download CV
            </button>
            <button
              className="btn btn-primary"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <button className="btn btn-dark">
              <a
                href="https://www.linkedin.com/in/mohube-tumisho-makgeru-742195214/"
                target="_blank"
              >
                <i className="bi bi-linkedin" />
              </a>
            </button>
            <button className="btn btn-dark">
              <a href="https://github.com/sunnybeatsza" target="_blank">
                <i className="bi bi-github" />
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
