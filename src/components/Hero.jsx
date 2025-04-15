import React from 'react';
//import ParticleBackground from './ParticleBackground';//

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-6">
      {/* Add ParticleBackground here
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10"></div>
     
     
     <h1 className="text-5xl font-bold text-[#d5a3ff] tracking-wide">Hey, I'm Amna!</h1>
      <p className="text-lg opacity-80 mt-4"> Frontend developer</p>

      {/* View My Work Button */}
      <a
        href="#projects" // Link to projects section (update the href with the actual section)
        className="mt-6 px-6 py-3 bg-[#d5a3ff] text-white font-bold rounded-lg hover:bg-[#b380e0] transition-all"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
