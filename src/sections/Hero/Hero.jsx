import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          SOFTWARE ENGINEER
        </p>

        <h1>
          Hi,
          <br />
          I'm
          <span> Akshay Pandit</span>
        </h1>

        <p className="hero-description">
          Building immersive digital experiences
          using React, Three.js and creative frontend
          engineering.
        </p>

        <button>
          Explore Portfolio
        </button>

      </div>

      <div className="hero-right">

        3D Scene Coming Soon

      </div>

    </section>
  );
}

export default Hero;