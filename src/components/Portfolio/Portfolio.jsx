import React from "react";

const projects = [
  {
    number: "01",
    title: "Reflector Agent",
    type: "Agentic sprint operations system",
    description:
      "An autonomous Python agent designed to coordinate sprint ceremonies, verify code changes against ticket scope, update issue trackers, and keep teams informed through connected tools.",
    stack: ["Python", "LLM routing", "Async APIs", "Human-in-the-loop"],
    href: "https://github.com/sunnybeatsza/Reflector-Agent",
    visual: "agent",
  },
  {
    number: "02",
    title: "PELO AudioWorks",
    type: "Audio-focused digital experience",
    description:
      "A substantial product build centred on audio, translating a creative identity into a focused and engaging web experience.",
    stack: ["Audio platform", "Web experience", "Product design"],
    href: "https://github.com/sunnybeatsza/PELO-AudioWorks",
    visual: "audio",
  },
  {
    number: "03",
    title: "XuriNet",
    type: "Crime intelligence & safety platform",
    description:
      "A full-stack crime data analytics application that makes safety intelligence more accessible through risk mapping, Red Zone awareness, and real-time alert concepts for South African communities.",
    stack: ["React 19", "TypeScript", "Python", "Tailwind CSS"],
    href: "https://github.com/sunnybeatsza/XuriNet",
    visual: "map",
  },
];

const ProjectVisual = ({ project }) => {
  if (project.visual === "agent") {
    return (
      <div className="project-visual project-visual-agent" aria-hidden="true">
        <div className="visual-topline">
          <span>Reflector / Agent</span>
          <span className="live-indicator">Active</span>
        </div>
        <div className="agent-flow">
          <span>01 · Understand</span>
          <span>02 · Coordinate</span>
          <span>03 · Verify</span>
          <span>04 · Review</span>
        </div>
        <p>Human-approved automation for better sprints.</p>
      </div>
    );
  }

  if (project.visual === "audio") {
    const bars = [34, 58, 82, 45, 72, 92, 62, 38, 78, 54, 88, 46, 68, 32, 74, 52];
    return (
      <div className="project-visual project-visual-audio" aria-hidden="true">
        <div className="visual-topline">
          <span>PELO / AudioWorks</span>
          <span>Now playing</span>
        </div>
        <div className="waveform">
          {bars.map((height, index) => (
            <span key={index} style={{ "--bar-height": `${height}%` }} />
          ))}
        </div>
        <div className="audio-progress">
          <span>01:42</span>
          <span>Creative sound, built for the web</span>
          <span>03:18</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-map" aria-hidden="true">
      <div className="visual-topline">
        <span>XuriNet / Safety intelligence</span>
        <span>Gauteng · ZA</span>
      </div>
      <div className="map-grid">
        <span className="risk-point risk-point-one" />
        <span className="risk-point risk-point-two" />
        <span className="risk-point risk-point-three" />
        <p>Red Zone awareness</p>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <section className="section section-shell work-section" id="work">
      <div className="section-heading work-heading">
        <div className="section-marker">
          <span>03</span>
          <p>Selected work</p>
        </div>
        <div>
          <h2>Projects with purpose.</h2>
          <p className="section-intro">
            Three ambitious builds spanning agentic automation, audio, and
            community safety technology.
          </p>
        </div>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-media">
              <ProjectVisual project={project} />
              <span className="project-number">{project.number}</span>
            </div>
            <div className="project-info">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                Explore project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
