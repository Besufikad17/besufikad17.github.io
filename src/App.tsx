import { useEffect, useState } from "react";
import DefaultLayout from "./components/layouts/Defualt";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProfilePicture from "./assets/images/profile-picture.jpg";
import './App.css';

function App() {
  const[section, setSection] = useState("about");
  
  useEffect(() => {
      document.title = 'Besufikad Micheal';
  }, []);

  return (
    <DefaultLayout section={section} setSection={setSection}>    
      { section === "about" ? (
        <div className="flex flex-col justify-center sm:flex-row sm:items-start gap-8 animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
          <img src={ProfilePicture} alt="profile" className="size-36 border-2 border-primary-950 dark:border-secondary-200 hover:border-blue-300 rounded-full" />
          <div className="flex flex-col items-center md:items-start gap-3 text-primary-950 dark:text-secondary-200 w-full md:w-1/2">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h1 className="text-3xl font-bold">besufikad micheal</h1>
              <span className="text-xl">full-stack developer</span>
            </div>
            <p>Building high-performance applications with cutting-edge technologies.</p>
          </div>
        </div>
      ) : section === "skills" ? (
        <div id="skills" className="flex flex-col items-center gap-8 text-primary-950 dark:text-secondary-200  animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
          <h1 className="text-3xl">Skills</h1>
          <span>Things I've picked up over the years</span>
          <Skills/>
        </div>
      ) : section === "experience" ? (
        <div className="flex flex-col gap-16 w-full md:w-1/2">
          <div id="experience" className="flex flex-col items-center gap-8 text-primary-950 dark:text-secondary-200  animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
            <h1 className="text-3xl">Experience</h1>
            <span>Places and people I've worked with</span>
            <Experience/>
          </div>
        </div>
      ) : (
        <div/>
      )}
    </DefaultLayout>
    //       <div className="projects-container">
    //         <p className="skill">Projects</p>
    //         <p className="skill-title">List of open-source projects I have been working on</p>
    //         <Projects/>
    //       </div>

    //       <div className="contact-container">
    //         <p className="xp">Let's grab a cup!</p>
    //         <p className="xp-title">Available to chat about design,
    //             people, and things.</p>
    //         <ContactForm/>
    //       </div>
  )
}

export default App
