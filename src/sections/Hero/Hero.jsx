import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hero-subtitle">
          SOFTWARE ENGINEER • IBM
        </p>

        <h1 className="hero-title">
          Hi,
          <br />
          I'm <span>Akshay Pandit</span>
        </h1>

        <p className="hero-description">
          Passionate Software Engineer focused on building
          premium web experiences with React, Three.js,
          JavaScript and modern frontend technologies.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Portfolio
          </button>

          <button className="secondary-btn">
            Contact Me
          </button>

        </div>

        <div className="hero-social">

          <a href="#">
            GitHub
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Resume
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="glass-card">

          <div className="circle one"></div>

          <div className="circle two"></div>

          <div className="circle three"></div>

          <div className="card-content">

            <h2>Akshay.OS</h2>

            <p>
              Initializing futuristic workspace...
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;