import React from "react";

const services = [
  {
    number: "01",
    title: "Cybersecurity",
    description:
      "Practical security assessment, threat analysis, access control, and risk mitigation across modern infrastructure and software.",
    skills: ["Penetration testing", "IAM", "Nmap & Nikto", "Kali Linux"],
  },
  {
    number: "02",
    title: "Full-stack engineering",
    description:
      "Responsive interfaces and reliable server-side systems, designed as one coherent product from browser to database.",
    skills: ["React", "Node.js", "Java", "Python", "REST APIs"],
  },
  {
    number: "03",
    title: "DevOps & infrastructure",
    description:
      "Repeatable server provisioning, secure secrets management, scripting, and collaborative delivery across development environments.",
    skills: ["Ansible", "HashiCorp Vault", "Docker", "Python & Bash"],
  },
];

const technologies = [
  { name: "Penetration testing", icon: "bi-shield-exclamation" },
  { name: "IAM", icon: "bi-fingerprint" },
  { name: "Nmap", icon: "bi-broadcast-pin" },
  { name: "Nikto", icon: "bi-search" },
  { name: "Kali Linux", logo: `${process.env.PUBLIC_URL}/tech-icons/kali.svg` },
  { name: "React", logo: `${process.env.PUBLIC_URL}/tech-icons/react.svg` },
  { name: "Node.js", logo: `${process.env.PUBLIC_URL}/tech-icons/nodejs.svg` },
  { name: "Java", logo: `${process.env.PUBLIC_URL}/tech-icons/java.svg` },
  { name: "Python", logo: `${process.env.PUBLIC_URL}/tech-icons/python.svg` },
  { name: "REST APIs", icon: "bi-globe2" },
  { name: "Ansible", logo: `${process.env.PUBLIC_URL}/tech-icons/ansible.svg` },
  { name: "HashiCorp Vault", logo: `${process.env.PUBLIC_URL}/tech-icons/vault.svg` },
  { name: "Docker", logo: `${process.env.PUBLIC_URL}/tech-icons/docker.svg` },
  { name: "Bash", logo: `${process.env.PUBLIC_URL}/tech-icons/bash.svg` },
];

export const Services = () => {
  return (
    <section className="section section-shell expertise-section" id="expertise">
      <div className="section-heading">
        <div className="section-marker">
          <span>02</span>
          <p>Expertise</p>
        </div>
        <div>
          <h2>Where I add value.</h2>
          <p className="section-intro">
            A focused skill set spanning secure systems, software delivery, and
            the workflows that keep both moving.
          </p>
        </div>
      </div>

      <article className="credential-feature">
        <div className="credential-label">
          <span className="credential-mark" aria-hidden="true">✓</span>
          <p>Industry certification</p>
        </div>
        <div className="credential-title">
          <p>CompTIA</p>
          <h3>Security<span>+</span></h3>
        </div>
        <div className="credential-copy">
          <p>
            Validated expertise in enterprise security fundamentals, threat
            detection, risk management, incident response, and secure
            architecture.
          </p>
          <a
            href="https://www.credly.com/badges/8fdb0b91-9084-42e4-a7e0-ee07fc120fcf/public_url"
            target="_blank"
            rel="noreferrer"
          >
            Verify credential <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="card-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="technology-showcase">
        <div className="technology-heading">
          <p>Technologies &amp; tools</p>
          <h3>The stack behind the work.</h3>
        </div>
        <ul className="technology-grid" aria-label="Technologies and tools">
          {technologies.map((technology) => (
            <li key={technology.name}>
              <span className="technology-icon" aria-hidden="true">
                {technology.logo ? (
                  <img src={technology.logo} alt="" className="technology-logo" />
                ) : (
                  <i className={`bi ${technology.icon}`} />
                )}
              </span>
              <span>{technology.name}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};
