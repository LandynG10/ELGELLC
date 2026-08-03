import { ThemeProvider } from "./context/ThemeContext";
import GrainOverlay from "./components/GrainOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <Capabilities />
        <Process />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
