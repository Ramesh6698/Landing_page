import "./App.css";
import Home from "./Components/Home/Home";
import About from './Components/About/About'
import Personal from "./Components/Personal/Personal";
import Project from './Components/Projects/Project'
import Contact from "./Components/Contact/Contact";
import Footer  from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Project/>
      <Personal/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
