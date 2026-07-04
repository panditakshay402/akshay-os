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

                    Hi,

                    <br/>

                    I'm

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