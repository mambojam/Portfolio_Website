import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import particlesConfig from "./particles-config.json"; 
import axios from "axios";
import ProjectsDashboard from "./features/projects/dashboard/ProjectsDashboard";
import HomePage from "./features/home/HomePage";
import About from "./features/personal/About";
import Contact from "./features/personal/Contact";
import NavBar from "./app/layout/NavBar";

function App() {

  // Background
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(
    () => particlesConfig, []);

  // Navigation
  // Create refs for each section component
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

   // Function to handle smooth scrolling
   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
    .then(response => {
      setProjects(response.data)
    })
  }, []) //<---- empty array of dependencies means this will only execute once


  if (init) {
    return (
      <>
      
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} />
        <div id="homeDiv" className="refDiv" ref={homeRef} >
        <HomePage scrollToAbout={() => scrollToSection(aboutRef)}/>
        </div>
        <NavBar  
          scrollToHome={() => scrollToSection(homeRef)} 
          scrollToAbout={() => scrollToSection(aboutRef)} 
          scrollToProjects={() => scrollToSection(projectsRef)} 
          scrollToContact={() => scrollToSection(contactRef)}/>
          <div id="aboutDiv" className="refDiv" ref={aboutRef}>
            <About />
          </div>
          <div id="projDiv" className="refDiv" ref={projectsRef}>
            <ProjectsDashboard projects={projects} scrollToContact={() => scrollToSection(contactRef)} />          
          </div>
          <div id="contactDiv" className="refDiv" ref={contactRef}>
            <Contact scrollToHome={() => scrollToSection(homeRef)} />
          </div>      
      </>
    );
  }

  return <></>;
};
export default App;