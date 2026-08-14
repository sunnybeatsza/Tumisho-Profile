import React from "react";

const education = [
  {
    number: "01",
    institution: "WeThinkCode_",
    qualification: "Higher National Diploma (NQF 6)",
    field: "Computer Software Engineering",
    description:
      "An intensive engineering programme spanning programming fundamentals, object-oriented development, brownfield systems, client-side applications, automated testing, and modern delivery practices.",
    topics: [
      "Python & Java",
      "Git / GitLab & OAuth",
      "REST APIs & JSON",
      "Linux, DevOps & Maven",
      "JUnit & automated testing",
      "HTML, CSS & JavaScript",
      "Docker & SQL",
      "Agile & CI/CD",
    ],
  },
  {
    number: "02",
    institution: "HyperionDev",
    qualification: "Full Stack Web Developer Bootcamp",
    field: "Full-stack web development",
    description:
      "Practical training in building responsive interfaces, server-side applications, and data-driven products across the JavaScript ecosystem.",
    topics: [
      "Bootstrap",
      "JavaScript",
      "SQL & MySQL",
      "MongoDB",
      "Express.js",
      "Node.js",
      "React & Redux",
      "DOM manipulation",
    ],
  },
  {
    number: "03",
    institution: "Acts House of Education",
    qualification: "National Senior Certificate",
    field: "Matric · 2020",
    description:
      "Completed the South African National Senior Certificate before beginning my professional software engineering journey.",
    topics: [],
  },
];

export const Education = () => {
  return (
    <section className="section section-shell education-section" id="education">
      <div className="section-heading">
        <div className="section-marker" data-reveal="up">
          <span>05</span>
          <p>Education</p>
        </div>
        <div data-reveal="up" style={{ "--reveal-delay": "70ms" }}>
          <h2>Learning that became practice.</h2>
          <p className="section-intro">
            Formal software engineering education supported by intensive,
            project-led full-stack training.
          </p>
        </div>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article
            className="education-item"
            key={item.institution}
            data-reveal="up"
          >
            <span className="education-number">{item.number}</span>
            <div className="education-title">
              <p>{item.institution}</p>
              <h3>{item.qualification}</h3>
              <span>{item.field}</span>
            </div>
            <div className="education-detail">
              <p>{item.description}</p>
              {item.topics.length > 0 && (
                <ul aria-label={`${item.institution} course topics`}>
                  {item.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
