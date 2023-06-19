// custom components
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet";

// assets
import pfp from "./assets/images/photo_2022-06-05_10-38-57.jpg";
import './App.css';
import Footer from "./components/Footer";


function App() {
  
  return (
    <>
      <div>
          
          <Helmet>
            <script 
              src="https://trantor.frectonz.tech/launch-control.js" 
              data-id="trantor" 
              data-tracking-id="01H2WBWDTT6PHXVEJRX5ANM8FQ">
            </script>
          </Helmet>

          {/* Header */}
          <div className="title-container">
            <p className="name">
                Besufikad Micheal
            </p>
            <p className="title">
                Fullstack developer || Student
            </p>
          </div>

          {/* Introduction */}
          <div className="intro-container">
            <div className="intro-row">
                <img src={pfp} alt="profile" />
                <div className="intro-card">
                  <p>
                      Hi there! I'm a fullstack developer and software engineering student based in Ethiopia.
                      I started programming in high school and developed my skills through project based learning techniques.
                      Currently I am working on open-source projects and avaliable for job.
                  </p>
                </div>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-container">
            <p className="skill">Skills</p>
            <p className="skill-title">Things I've picked up over the years</p>
            <Skills/>
          </div>

          {/* Experience */}
          <div className="experience-container">
            <p className="xp">Experience</p>
            <p className="xp-title">Places and people I've worked with</p>
            <Experience/>
          </div>

          {/* Projects */}
          <div className="projects-container">
            <p className="skill">Projects</p>
            <p className="skill-title">List of open-source projects I have been working on</p>
            <Projects/>
          </div>

          {/* Contact */}
          <div className="contact-container">
            <p className="xp">Let's grab a cup!</p>
            <p className="xp-title">Available to chat about design,
                people, and things.</p>
            <ContactForm/>
          </div>

          {/* Footer */}
          <Footer/>

        </div>  
    </>
  )
}

export default App
