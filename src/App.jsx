import Container from "./components/common/Container";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />
      </Container>
    </>
  );
}

export default App;