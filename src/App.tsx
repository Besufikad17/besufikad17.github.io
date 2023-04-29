// custom components
import Skills from "./components/Skills";
import Experience from "./components/Experience";

// assets
import pfp from "./assets/images/photo_2022-06-05_10-38-57.jpg";
import './App.css';



function App() {

  return (
    <>
      <div>

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

        </div>  
    </>
  )
}

export default App
