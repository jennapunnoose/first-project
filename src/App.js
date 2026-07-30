import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";  // Added
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";  // Added   
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <div id="home">
        <Home />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>
      {/* Achievements Section */}
      <div id="achievements">
        <Achievements />
      </div>

      {/* Education Section */}
      <div id="education">
        <Education />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
