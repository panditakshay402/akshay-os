import Container from "./components/common/Container";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";

import About from "./sections/About/About";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />
        <About />
      </Container>
    </>
  );
}

export default App;