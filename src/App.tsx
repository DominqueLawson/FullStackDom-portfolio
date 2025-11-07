import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import DefilightsCaseStudy from "./components/DefilightsCaseStudy";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
              </>
            }
          />
          <Route path="/defilights" element={<DefilightsCaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
