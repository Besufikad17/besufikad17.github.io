import pythonIcon from "../assets/images/file-type-python (1).svg";
import javaIcon from "../assets/images/java.svg";
import javascriptIcon from "../assets/images/javascript.svg";
import cppIcon from "../assets/images/file-type-cpp3.svg";
import goIcon from "../assets/images/golang.svg";
import dartIcon from "../assets/images/dart.svg";
import flutterIcon from "../assets/images/file-type-flutter.svg";
import reactIcon from "../assets/images/react.svg";
import svelteIcon from "../assets/images/file-type-svelte.svg";
import nodeIcon from "../assets/images/nodejs-icon.svg";
import prismaIcon from "../assets/images/file-type-light-prisma.svg";
import mysqlIcon from "../assets/images/mysql-icon.svg";
import mongodbIcon from "../assets/images/mongodb.svg";
import postgresIcon from "../assets/images/postgresql.svg";

export default function Skills() {
  const skills = [
    [pythonIcon, "python"],
    [javaIcon, "java"],
    [cppIcon, "c++"],
    [javascriptIcon, "javascript"],
    [goIcon, "golang"],
    [dartIcon, "dart"],
    [flutterIcon, "flutter"],
    [reactIcon, "react"],
    [svelteIcon, "svelte"],
    [nodeIcon, "nodejs"],
    [prismaIcon, "prisma"],
    [mysqlIcon, "mysql"],
    [mongodbIcon, "mongodb"],
    [postgresIcon, "postgresql"],
  ];

  return (
    <div className="row">
      {skills.map((skill, i) => {
        return (
          <div className="icon" key={i}>
            <img
              src={skill[0]}
              alt={skill[1]}
              height="50px"
              width="50px"
            />
            <span className="tooltiptext">{skill[1]}</span>
          </div>
        );
      })}
    </div>
  );
}
