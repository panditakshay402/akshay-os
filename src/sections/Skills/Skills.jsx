import "./Skills.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Three.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Playwright",
  "Cypress",
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <p className="section-tag">
        MY SKILLS
      </p>

      <h2>
        Technologies I Work With
      </h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;