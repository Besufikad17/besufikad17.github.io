import { useEffect } from "react";
import DefaultLayout from "./components/layouts/Defualt";
import ProfilePicture from "./assets/images/profile-picture.png";
import './App.css';

function App() {
  useEffect(() => {
      document.title = 'Besufikad Micheal';
  }, []);

  return (
    <DefaultLayout>    
      <div className="flex flex-col sm:flex-row sm:items-start gap-8 w-1/2">
        <img src={ProfilePicture} alt="profile" className="size-36 border-2 border-primary-950 dark:border-secondary-200 hover:border-blue-300 rounded-full" />
        <div className="flex flex-col gap-6 text-primary-950 dark:text-secondary-200">
          <h1 className="text-3xl font-bold">i'm besufikad micheal</h1>
          <span>a full-stack developer from Ethiopia</span>
          <a href="https://wakatime.com/@878e86a6-8cd1-46ca-92a0-8a22ea5e6437">
            <img src="https://wakatime.com/badge/user/878e86a6-8cd1-46ca-92a0-8a22ea5e6437.svg" alt="Total time coded since Oct 29 2022" />
          </a>
        </div>
      </div>
    </DefaultLayout>
    //       <div className="skills-container">
    //         <p className="skill">Skills</p>
    //         <p className="skill-title">Things I've picked up over the years</p>
    //         <Skills/>
    //       </div>

    //       <div className="experience-container">
    //         <p className="xp">Experience</p>
    //         <p className="xp-title">Places and people I've worked with</p>
    //         <Experience/>
    //       </div>

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

    //       <Footer/>
    //     </div>  
    // </>
  )
}

export default App
