import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  About  from "./About.js";
import Projects  from "./Projects.js";
import  Contact  from "./Contact.js";
import Home from "./Home";
function App() {
  return (
    
      <Router>
        <Nav />
        <div className="App">
          <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;