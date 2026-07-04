import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <p className="section-tag">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Building scalable products
          with clean code &
          modern technologies.
        </h2>

        <p className="about-text">
          I'm Akshay Pandit, a Software Engineer currently
          working at IBM. I enjoy building modern,
          responsive and high-performance web
          applications using React, JavaScript,
          Three.js and frontend technologies.
        </p>

        <p className="about-text">
          My goal is to become a world-class Software
          Engineer while creating premium digital
          experiences that people genuinely enjoy
          using.
        </p>

        <div className="about-stats">

          <div className="stat-card">
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>20+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Passion</p>
          </div>

        </div>

      </div>

      <div className="about-right">

        <div className="about-card">

          <h3>Current Stack</h3>

          <ul>

            <li>React.js</li>

            <li>JavaScript</li>

            <li>Three.js</li>

            <li>Node.js</li>

            <li>MongoDB</li>

            <li>Git & GitHub</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;