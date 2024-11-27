import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import DefaultLayout from "./components/layouts/Defualt";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProfilePicture from "./assets/images/profile-picture.jpg";
import Projects from "./components/Projects";
import './App.css';

function App() {
  const[section, setSection] = useState("about");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  
  useEffect(() => {
    document.title = 'Besufikad Micheal';
  }, []);

  return (
    <DefaultLayout section={section} setSection={setSection} showToast={showToast} toastMessage={toastMessage} toastType={toastType} setShowToast={setShowToast} >    
      { section === "about" ? (
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start gap-8 animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
          <img src={ProfilePicture} alt="profile" className="size-36 border-2 border-primary-950 dark:border-secondary-200 hover:border-blue-300 rounded-full" />
          <div className="flex flex-col items-center sm:items-start gap-3 p-4 text-primary-950 dark:text-secondary-200 w-full md:w-1/2">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <h1 className="text-3xl font-bold">besufikad micheal</h1>
              <span className="text-xl">full-stack developer</span>
            </div>
            <p className="text-center sm:text-left">Building high-performance applications with cutting-edge technologies.</p>
          </div>
        </div>
      ) : section === "skills" ? (
        <div id="skills" className="flex flex-col items-center gap-8 text-primary-950 dark:text-secondary-200  animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
          <h1 className="text-3xl">Skills</h1>
          <div className="flex flex-col items-center gap-4">
            <span>Things I've picked up over the years</span>
            <Skills/>
          </div>
        </div>
      ) : section === "experience" ? (
        <div className="flex flex-col gap-16 w-full md:w-1/2">
          <div id="experience" className="flex flex-col items-center gap-8 text-primary-950 dark:text-secondary-200  animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
            <h1 className="text-3xl">Experience</h1>
            <span>Places and people I've worked with</span>
            <Experience/>
          </div>
        </div>
      ) : section === "projects" ? (
        <div className="flex flex-col gap-16 w-full md:w-2/3">
          <div id="experience" className="flex flex-col items-center gap-8 text-primary-950 dark:text-secondary-200  animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
            <h1 className="text-3xl">Projects</h1>
            <span>List of projects I have been working on</span>
            <Projects/>
          </div>
        </div>
      ) : section === "contact" ? (
        <div className="flex flex-col gap-16 w-full sm:w-1/2">
          <div id="experience" className="flex flex-col items-center gap-8 p-4 text-primary-950 dark:text-secondary-200  animate-fade-left animate-once animate-duration-[200ms] animate-delay-[10ms] animate-ease-in animate-normal animate-fill-forwards">
            <h1 className="text-3xl">Let's grab a cup!</h1>
            <span className="text-center">Available to chat about design, people, and things</span>
            <ContactForm setShowToast={setShowToast} setToastMessage={setToastMessage} setToastType={setToastType} />
          </div>
        </div>
      ) : (
        <div/>
      )}
    </DefaultLayout>
  )
}

export default App
