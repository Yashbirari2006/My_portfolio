import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  const isMobileDesktopSite =
    /Android/i.test(navigator.userAgent) &&
    navigator.maxTouchPoints > 0 &&
    window.matchMedia("(orientation: portrait)").matches &&
    window.innerWidth > 600 &&
    Math.min(window.screen.width, window.screen.height) <= 600;

  return (
    <div
      className={`min-h-screen overflow-x-hidden bg-zinc-950 text-white ${
        isMobileDesktopSite ? "mobile-desktop-site" : ""
      }`}
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;