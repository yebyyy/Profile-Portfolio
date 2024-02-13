import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
          <Header />
          <About />
          <Skills />
          <Contact />
      </div>
  );
}

export default App;
