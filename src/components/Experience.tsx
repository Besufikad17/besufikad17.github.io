import { EXPERIENCE } from "../utils/constants/strings";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      { EXPERIENCE.map((exp, index) => {
        return (
          <div className="flex flex-col gap-4 border-y-2 py-2 border-primary-950 dark:border-secondary-200 text-primary-950 dark:text-secondary-200" key={index}>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-bold">{exp.role}</span>
                <span className="text-sm italic">{exp.company}</span>   
              </div>
              <span>{exp.duration}</span>
            </div>
            <ul className="flex flex-col gap-4 p-4 list-disc">
              {exp.description.map((points, index) => <li key={index}>{points}</li>)}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
