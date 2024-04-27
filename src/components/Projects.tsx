export default function Projects() {
  const projects = [
    [
      <a href="https://github.com/Besufikad17/PPM">PPM</a>,
      "UI based desktop app for installing, removing and updating python packages",
    ],
    [
      <a href="https://github.com/Besufikad17/Terminator">Terminator</a>,
      " CLI based python application for removing worms and unwanted files",
    ],
    [
      <a href="https://github.com/Besufikad17/ChemistryTool">ChemistryTool</a>,
      "A module that solves chemistry related problems interms of algoritihms",
    ],
    [
      <a href="https://github.com/Besufikad17/CalanderFx">CalanderFx</a>,
      "CalanderFx is javaFx app which is based on Ethiopic calander system"
    ],
    [
      <a href="https://github.com/Besufikad17/Gabrovowoch">ጋቭሮቮዎች</a>,
      " Driven by nostalgia I made web app to read jokes about Gabrovs using svelte.",
    ],
    [
      <a href="https://github.com/Besufikad17/Automata">Automata</a>,
      " A simple python script to download basic templates for web developers.",
    ],
    [
      <a href="https://github.com/Besufikad17/waliyalift">waliyalift</a>,
      " Simple Ride hailing app made by using flutter."
    ],
    [
      <a href="https://github.com/Besufikad17/pick_and_drop">pick_and_drop</a>,
      " Simple android app for selecting pick and drop information of a logistic item."
    ]
  ];

  return (
    <div className="row2">
      {projects.map((project, i) => {
        return(
            <div className="card" key={i}>
                <b>{project[0]}</b>
                <p>{project[1]}</p>
            </div>
        )
      })}
    </div>
  );
}
