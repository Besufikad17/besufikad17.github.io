import { Icon } from "@iconify/react";
import { SKILLS } from "../utils/constants/strings";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-6 text-primary-950 dark:text-secondary-200">
      <div className="flex flex-col gap-4 p-4 text-primary-950 dark:text-secondary-200">
        <span className="flex items-center gap-4 py-1 text-xl font-semibold border-b-2 border-primary-950 dark:border-secondary-200">
          <Icon icon="ic:sharp-code-off" />
          <span>Frontend</span>
        </span>
        { SKILLS["frontend"].map((skill, index) => {
          return (
            <div className="flex items-center gap-3" key={index}>
              <Icon className="text-xl" icon={skill.icon} />
              {skill.name}
            </div>
          ); 
        })}
      </div>
      <div className="flex flex-col gap-4 p-4 text-primary-950 dark:text-secondary-200">
        <span className="flex items-center gap-4 py-1 text-xl font-semibold border-b-2 border-primary-950 dark:border-secondary-200">
          <Icon icon="mdi:server" />
          <span>Backend</span>
        </span>
        { SKILLS["backend"].map((skill, index) => {
          return (
            <div className="flex items-center gap-3" key={index}>
              <Icon className="text-xl" icon={skill.icon} />
              {skill.name}
            </div>
          ); 
        })}
      </div>
      <div className="flex flex-col gap-4 p-4 text-primary-950 dark:text-secondary-200">
        <span className="flex items-center gap-4 py-1 text-xl font-semibold border-b-2 border-primary-950 dark:border-secondary-200">
          <Icon icon="material-symbols:android" />
          <span>Mobile</span>
        </span>
        { SKILLS["mobile"].map((skill, index) => {
          return (
            <div className="flex items-center gap-3" key={index}>
              <Icon className="text-xl" icon={skill.icon} />
              {skill.name}
            </div>
          ); 
        })}
      </div>
      <div className="flex flex-col gap-4 p-4 text-primary-950 dark:text-secondary-200">
        <span className="flex items-center gap-4 py-1 text-xl font-semibold border-b-2 border-primary-950 dark:border-secondary-200">
          <Icon icon="material-symbols:database" />
          <span>Database</span>
        </span>
        { SKILLS["database"].map((skill, index) => {
          return (
            <div className="flex items-center gap-3" key={index}>
              <Icon className="text-xl" icon={skill.icon} />
              {skill.name}
            </div>
          ); 
        })}
      </div>
    </div>
  );
}
