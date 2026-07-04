import "./Projects.css";

const projects = [
  {
    title: "Akshay Portfolio",
    description:
      "A futuristic portfolio built with React, Three.js, GSAP and modern animations.",
    tech: ["React", "Three.js", "GSAP", "Vite", "CSS", "JavaScript", "HTML"],
    github: "https://github.com/panditakshay402/akshay-os",
    live: "#",
  },
  {
    title: "Automation Framework",
    description:
      "Enterprise automation framework using Playwright with Page Object Model.",
    tech: ["Playwright", "JavaScript", "Node.js"],
    github: "https://github.com/panditakshay402/Js_PlayWright",
    live: "#",
  },
  {
    title: "EtherHealth",
    description:
      "Full Stack Healthcare Management System with operations and authentication.",
    tech: ["React", "Node.js", "MongoDB", "blockchain integration"],
    github: "https://github.com/panditakshay402/EtherHealth",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <p className="section-tag">
        PROJECTS
      </p>

      <h2 className="section-title">
        Featured Work
      </h2>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <div className="project-image">
              Project Preview
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;