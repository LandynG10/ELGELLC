import { ThemeProvider } from "./context/ThemeContext";
import GrainOverlay from "./components/GrainOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import Guarantee from "./components/Guarantee";
import Faq from "./components/Faq";
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
        <Services />
        <Guarantee />
        <FeaturedWork />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
