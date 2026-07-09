import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Achievements />

        <Certifications />

        <CodingProfiles />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;