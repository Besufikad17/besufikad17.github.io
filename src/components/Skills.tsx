import { Icon } from "@iconify/react";
import { SKILLS } from "../utils/constants/strings";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center w-full md:w-2/3 gap-6 text-primary-950 dark:text-secondary-200">
      { SKILLS.map((skill, index) => <Icon className="text-3xl hover:text-blue-300" icon={skill.icon} key={index} />) }
    </div>
  );
}
