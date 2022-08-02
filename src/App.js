import * as React from "react";
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/About/About";
import Blog from "./Component/Pages/Blog/Blog";
import Contact from "./Component/Pages/Contact/Contact";
import ParticlesTop from "./Component/Pages/Particles/ParticlesTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<ParticlesTop />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
