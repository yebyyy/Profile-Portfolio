import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResearchExperience from "./components/ResearchExperience";
import RelevantCourses from "./components/RelevantCourses";
import Interests from "./components/Interests";

function App() {
  return (
      <div>
          <Header />
          <About />
          <Skills />
          <Interests />
          <Projects />
          <ResearchExperience />
          <RelevantCourses />
      </div>
  );
}

export default App;
