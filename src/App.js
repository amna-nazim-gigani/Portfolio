import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1e0036] via-[#100020] to-black">
      <Navbar />
     
      <Hero />
      <About/>
      <Projects/>
  
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
