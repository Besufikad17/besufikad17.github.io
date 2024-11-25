import { useState } from "react"; 
import { Icon } from "@iconify/react";
import { LINKS, RESUME_LINK } from "../../utils/constants/strings";
import { useThemeDetector } from "../../utils/functions/theme";
import type { HeaderProps } from "../../types/component";

export default function Header(props: HeaderProps) {
    const [mode, setMode] = useState(useThemeDetector() ? "dark" : "light");

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.classList.remove("dark");
        } else {
            setMode("light");
            document.body.classList.add("dark");
        }
    }

    return (
        <div className="flex items-center justify-center lg:w-2/3 w-full bg-secondary-200 dark:bg-primary-950 sticky">
            <div className="flex items-center justify-between w-full p-8 text-primary-950 dark:text-secondary-200">
                <h1 className="text-2xl md:text-4xl font-semibold">bm</h1>
                <div className="hidden md:flex items-start gap-8">
                    {  
                        LINKS.map((link, index) => {
                            return (
                                <a href={link.url} className="hover:border-b hover:border-blue-300 hover:text-blue-300 cursor-pointer" key={index}>
                                    {link.name}
                                </a>
                            );
                        }) 
                    }
                </div>
                <div className="flex items-center gap-8">
                    {
                        mode === "light" ? (
                            <button onClick={toggleMode} className="focus:outline-none focus:ring-0">
                                <Icon icon="iconoir:sun-light" className="text-2xl hover:text-blue-300" />
                            </button>
                        ) : (
                            <button onClick={toggleMode} className="focus:outline-none focus:ring-0">
                                <Icon icon="circum:dark" className="text-2xl hover:text-blue-300" />
                            </button>
                        )
                    }
                    <a href={RESUME_LINK} target="_blank" className="hidden md:block rounded-md border-2 border-primary-950 dark:border-secondary-200 hover:border-blue-300 dark:hover:border-blue-300 hover:text-blue-300 cursor-pointer bg-secondary-200 dark:bg-primary-950 px-4 py-1 focus:outline-none focus:ring-0"> 
                        resume 
                    </a>
                    <button className="flex md:hidden focus:outline-none focus:ring-0" onClick={props.toggleDrawer}>
                        <Icon icon="bx:bx-menu" className="text-2xl hover:text-blue-300" />
                    </button>
                </div>
            </div>
        </div>
    );
}