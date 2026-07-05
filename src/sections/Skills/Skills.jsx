import "./Skills.css";

const skills = [
  {
    title: "Frontend",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React-Native",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend",
    tech: [
      "Node.js",
      "Express.js",
      ".NET",
      "REST API",
      "SQL"
    ]
  },
  {
    title: "Database",
    tech: [
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Firebase"
    ]
  },
  {
    title: "Tools",
    tech: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Linux"
    ]
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <p className="section-tag">
        MY SKILLS
      </p>

      <h2 className="section-title">
        Technologies I Work With
      </h2>

      <div className="skills-grid">

        {skills.map((category) => (

          <div
            className="skill-card"
            key={category.title}
          >

            <h3>{category.title}</h3>

            <div className="skill-list">

              {category.tech.map((item) => (

                <span
                  className="skill-badge"
                  key={item}
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;