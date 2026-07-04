import Container from "./components/common/Container";

import Navbar from "./components/layout/Navbar";

import Background from "./components/ui/Background";

import CustomCursor from "./components/ui/CustomCursor";

import SmoothScroll from "./components/ui/SmoothScroll";

import Loader from "./components/ui/Loader";

import Hero from "./sections/Hero/Hero";

import About from "./sections/About/About";

import Skills from "./sections/Skills/Skills";

import Projects from "./sections/Projects/Projects";

import Experience from "./sections/Experience/Experience";

import Contact from "./sections/Contact/Contact";

import Footer from "./sections/Footer/Footer";

function App() {

    return (

        <>

            <Loader />

            <SmoothScroll />

            <Background />

            <CustomCursor />

            <Navbar />

            <Container>

                <Hero />

                <About />

                <Skills />

                <Projects />

                <Experience />

                <Contact />

                <Footer />

            </Container>

        </>

    );

}

export default App;