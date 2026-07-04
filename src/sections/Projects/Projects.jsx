import "./Projects.css";
import projects from "./projectsData";

function Projects() {
  return (
    <section id="projects" className="projects">

      <p className="section-tag">
        PROJECTS
      </p>

      <h2>
        Featured Projects
      </h2>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <div className="project-image">

              Preview

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <button>Github</button>

                <button>Live Demo</button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;