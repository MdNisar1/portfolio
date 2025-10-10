import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./Pages/Home/HomePages";
import AboutPages from "./Pages/About/AboutPages";
import ContactPages from "./Pages/Contact/ContactPages";
import EducationPages from "./Pages/Education/EducationPages";
import ProjectPages from "./Pages/Project/ProjectPages";
import Navbar from "./components/navbar/navbar";
import SkillsPages from "./Pages/Skills/SkillsPages";





function App() {

  return (
    <Router>
      <Navbar/>
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/skills" element={<SkillsPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/Education" element={<EducationPages />} />
        <Route path="/Project" element={<ProjectPages />} />
      </Routes>
   </Router>
  );
}

export default App
