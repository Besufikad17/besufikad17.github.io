import { Icon } from "@iconify/react";
import { PROJECTS } from "../utils/constants/strings";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      {PROJECTS.map((project, index) => {
        return (
          <div className="flex flex-col gap-4 p-4 text-primary-950 dark:text-secondary-200 border-2 border-primary-950 dark:border-secondary-200 rounded-md" key={index}>
            <h1 className="text-2xl font-semibold">{project.title}</h1>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.tools.map((tool, index) => <span className="p-1 rounded-md text-xs text-secondary-200 dark:text-primary-950 bg-primary-950 dark:bg-secondary-200" key={index}>{tool}</span>)}
            </div>
            { project.link && (
              <a href={project.link} target="_blank" className="flex items-center gap-3 hover:text-blue-300 hover:underline">
                View 
                <Icon icon="charm:link-external" />
              </a>
            )}
          </div>
        )
      })}
    </div>
  );
}
