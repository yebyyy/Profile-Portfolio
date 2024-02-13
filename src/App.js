import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ResearchExperience from "./components/ResearchExperience";

function App() {
  return (
      <div>
          <Header />
          <About />
          <Skills />
          <Projects />
          <ResearchExperience />
          <Contact />
      </div>
  );
}

export default App;
