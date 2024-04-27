export default function Experience() {
  
  const xps = [
    [
      "Zerone Technologies",
      "Software Devlopment Intern",
      "Developed",
      <a href="https://github.com/Besufikad17/waliyalift">waliyalift</a> 
    ],
    [
      "Chewatacon",
      "Participant in 2021 D5 game jam.",
      "Co-developed",
      <a href="https://github.com/Besufikad17/DigitalAcheda">digitalAcheda</a>,
    ],
    [
      "Icog-Labs",
      "Participant in 2019 Solve-IT competition.",
      "Co-developed ecobox",
    ],
    [
      "Afriopia Hackhton",
      "Participated in 2023 Afriopia Hackhton",
      "Co-developed",
      <a href="https://github.com/Team-Bazooka/TeleQuiz-backend">tele-quiz bot backend</a>,
    ],
  ];
  return (
    <div className="row2">
      {xps.map((xp, i) => {
        return (
          <div className="card" key={i}>
            <b>{xp[0]}</b>
            <p>{xp[1]}</p>
            <p>
              {xp[2]} {xp[3] ? xp[3] : null}
            </p>
          </div>
        );
      })}
    </div>
  );
}
