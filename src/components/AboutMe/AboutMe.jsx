import React from "react";
import ProfilePhoto from "../../Assets/Profile_picture.jpg";

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
          className="about-profile"
          data-reveal="up"
          style={{ "--reveal-delay": "120ms" }}
        >
          <figure className="about-portrait">
            <img src={ProfilePhoto} alt="Mohube Tumisho Makgeru" />
          </figure>
          <div className="about-bio-copy">
            <p className="about-lead">
              I&apos;m the Cybersecurity Lead at Mavuma Enterprise, working
              remotely after an internal promotion in August 2026. I turn
              business and technical risks into prioritized actions and help
              teams build security into day-to-day delivery.
            </p>
            <div className="about-detail">
              <p>
                I coordinate vulnerability management from scanning and
                triage through remediation and verification, and plan internal
                security assessments and penetration tests using Nmap,
                ssh-audit, Nikto, and Kali Linux. I also review security for
                software releases, infrastructure changes, access controls,
                and secrets handling.
              </p>
              <p>
                My work includes strengthening least-privilege IAM and
                credential practices, coordinating incident readiness and
                response, and promoting security awareness. I partner with
                engineering teams to bring security checks into Agile and
                CI/CD workflows. I hold CompTIA Security+ and Microsoft Azure
                Fundamentals (AZ-900) certifications.
              </p>
            </div>
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
