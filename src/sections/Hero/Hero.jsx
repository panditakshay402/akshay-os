import "./Hero.css";

import { motion } from "framer-motion";

import Scene from "../../three/Scene/Scene";

function Hero() {

    return (

        <section
            className="hero"
            id="home"
        >

            <motion.div

                className="hero-left"

                initial={{
                    opacity:0,
                    x:-80
                }}

                animate={{
                    opacity:1,
                    x:0
                }}

                transition={{
                    duration:1
                }}

            >

                <p className="hero-subtitle">

                    SOFTWARE ENGINEER • IBM

                </p>

                <h1 className="hero-title">

                    Hi, I'm <br/>

                    <span>

                        {" "}Akshay Pandit

                    </span>

                </h1>

                <p className="hero-description">

                    Building futuristic digital experiences using
                    React, Three.js, GSAP and modern frontend
                    engineering.

                </p>

                <div className="hero-buttons">

                    <button
                        className="primary-btn"
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Explore Portfolio
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Contact Me
                    </button>

                </div>

                <div className="hero-social">

                    <a href="https://github.com/panditakshay402" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/akshay-pandit-Mumbai/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>

                    <a href="https://drive.google.com/file/d/1g0k5r6J4X8x7Z9y5F3K2L8J9H2P3Q4R5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>

                </div>

            </motion.div>

            <motion.div

                className="hero-right"

                initial={{
                    opacity:0,
                    scale:.8
                }}

                animate={{
                    opacity:1,
                    scale:1
                }}

                transition={{
                    duration:1.2
                }}

            >

                <div className="glass-card">

                    <Scene/>

                </div>

            </motion.div>

        </section>

    );

}

export default Hero;