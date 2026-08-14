import React from "react";

const capabilities = [
  "Threat & risk analysis",
  "Full-stack development",
  "Secure authentication",
  "Technical documentation",
  "API development",
  "Client enablement",
];

export const AboutMe = () => {
  return (
    <section className="section section-shell about-section" id="about">
      <div className="section-marker" data-reveal="up">
        <span>01</span>
        <p>About</p>
      </div>

      <div className="about-content">
        <h2 data-reveal="up" style={{ "--reveal-delay": "70ms" }}>
          Technical depth,
          <br />
          <span>clear communication.</span>
        </h2>

        <div
          className="about-grid"
          data-reveal="up"
          style={{ "--reveal-delay": "120ms" }}
        >
          <p className="about-lead">
            I bring together cybersecurity thinking, software development, and
            business operations to solve practical problems, not just technical
            ones.
          </p>
          <div className="about-detail">
            <p>
              My experience supporting international clients has sharpened my
              approach to service delivery, renewals, documentation, and issue
              resolution. I pair that client perspective with hands-on work in
              Java, Python, JavaScript, React, Node.js, SQL, Linux, and Docker.
            </p>
            <p>
              The result is a balanced approach: understand the risk, explain it
              clearly, and build a solution people can actually use.
            </p>
          </div>
        </div>

        <div className="capability-list" aria-label="Core capabilities">
          {capabilities.map((capability, index) => (
            <div
              className="capability-item"
              key={capability}
              data-reveal="up"
              style={{ "--reveal-delay": `${(index % 2) * 65}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{capability}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
