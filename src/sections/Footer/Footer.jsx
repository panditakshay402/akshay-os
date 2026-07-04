import "./Footer.css";

function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="footer-top">

                <div className="footer-logo">

                    <h2>
                        Akshay<span>.OS</span>
                    </h2>

                    <p>
                        Building premium digital experiences
                        with modern web technologies.
                    </p>

                </div>

                <div className="footer-links">

                    <a href="#home">
                        Home
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#skills">
                        Skills
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#experience">
                        Experience
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </div>

                <div className="footer-social">

                    <a href="#">
                        GitHub
                    </a>

                    <a href="#">
                        LinkedIn
                    </a>

                    <a href="#">
                        LeetCode
                    </a>

                    <a href="#">
                        Resume
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>

                    © {year} Akshay Pandit.
                    All Rights Reserved.

                </p>

            </div>

        </footer>

    );

}

export default Footer;