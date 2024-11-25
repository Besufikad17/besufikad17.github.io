import { Icon } from "@iconify/react";
import { SOCIAL_LINKS } from "../../utils/constants/strings";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-6 text-2xl text-primary-950 dark:text-secondary-200">
        { SOCIAL_LINKS.map((social, index) =>  <a href={social.url} target="_blank" className="hover:text-blue-300">
            <Icon icon={social.icon} key={index} /></a>) }
      </div>
    </div>
  );
}
