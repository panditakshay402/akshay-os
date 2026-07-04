import Container from "./components/common/Container";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";

import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />
        <About />
        <Skills />
      </Container>
    </>
  );
}

export default App;