import "./Projects.css";

const projects = [
  {
    title: "Akshay.OS Portfolio",
    description:
      "A futuristic portfolio built with React, Three.js, GSAP and modern animations.",
    tech: ["React", "Three.js", "GSAP"],
    github: "#",
    live: "#",
  },
  {
    title: "Automation Framework",
    description:
      "Enterprise automation framework using Playwright with Page Object Model.",
    tech: ["Playwright", "JavaScript", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Employee Management",
    description:
      "Full Stack Employee Management System with CRUD operations and authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
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