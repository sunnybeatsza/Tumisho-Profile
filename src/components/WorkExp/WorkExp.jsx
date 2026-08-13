import React from "react";

const roles = [
  {
    period: "Mar 2026 — Present",
    title: "Junior DevOps / Software Engineer",
    company: "Mavuma Enterprise",
    location: "Remote",
    description:
      "Provision server infrastructure with Ansible, automate operations with Python and Bash, and manage secrets securely. Built a React and FastAPI customer support dashboard, performed pre-launch penetration testing, and validated releases through unit testing.",
    skills: ["Ansible", "Python", "FastAPI", "Security testing"],
  },
  {
    period: "Nov 2025 — Feb 2026",
    title: "Intern Software Developer",
    company: "Adakin Digital",
    location: "Remote",
    description:
      "Developed backend software and architecture with JavaScript, TypeScript, Prisma ORM, and PostgreSQL. Supported data-pipeline work and participated in Agile planning through Azure DevOps.",
    skills: ["TypeScript", "PostgreSQL", "Prisma ORM", "Azure DevOps"],
  },
  {
    period: "Sep 2025 — Dec 2025",
    title: "Technical Mentor",
    company: "WeThinkCode_",
    location: "Rosebank, South Africa",
    description:
      "Led workshops, guided students through technical problems, and encouraged collaborative software development during the programme's first phase.",
    skills: ["Mentoring", "Workshops", "Problem solving"],
  },
  {
    period: "Aug 2022 — Jul 2024",
    title: "Customer Service Advisor",
    company: "OUTsurance (OSS) · Hastings Direct",
    location: "Remote · UK-based",
    description:
      "Supported customers with policy enquiries, renewals, claims processing, and general service for a major UK insurance broker.",
    skills: ["Customer service", "Claims support", "Policy servicing"],
  },
  {
    period: "Apr 2021 — Jul 2022",
    title: "Renewals Advisor",
    company: "OUTsurance (OSS) · Hastings Direct",
    location: "Remote · UK-based",
    description:
      "Managed insurance renewals and negotiations, offering tailored options that supported smooth transitions and customer retention.",
    skills: ["Renewals", "Negotiation", "Retention"],
  },
];

export const WorkExp = () => {
  return (
    <section className="section section-shell experience-section" id="experience">
      <div className="section-heading">
        <div className="section-marker">
          <span>04</span>
          <p>Experience</p>
        </div>
        <div>
          <h2>Building at the intersection of security and software.</h2>
          <p className="section-intro">
            Hands-on engineering experience supported by a strong foundation
            in mentorship, customer service, and clear communication.
          </p>
        </div>
      </div>

      <div className="timeline">
        {roles.map((role, index) => (
          <article className="timeline-item" key={`${role.title}-${role.period}`}>
            <div className="timeline-description-side">
              <p className="timeline-description">{role.description}</p>
              <ul className="timeline-skills" aria-label={`${role.title} skills`}>
                {role.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="timeline-axis" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="timeline-role">
              <p className="timeline-period">{role.period}</p>
              <h3>{role.title}</h3>
              <p>{role.company}</p>
              <p className="timeline-location">{role.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
