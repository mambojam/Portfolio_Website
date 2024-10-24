import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./particles-config.json"; 
import axios from "axios";
import ProjectsDashboard from "./features/projects/dashboard/ProjectsDashboard";
import HomePage from "./features/home/HomePage";
import About from "./features/personal/About";
import Contact from "./features/personal/Contact";
import NavBar from "./app/layout/NavBar";
import { Message } from "./app/domain/Message";

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

  function submitForm(message : Message) {
    message.timeSubmitted = Date.now().toString();
    console.log(message.messageDetails);
  }



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
            <ProjectsDashboard projects={projects} />          
          </div>
          <div id="contactDiv" className="refDiv" ref={contactRef}>
            <Contact submitForm={submitForm}/>
          </div>      
      </>
    );
  }

  return <></>;
};
export default App;