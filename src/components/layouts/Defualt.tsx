import { useEffect, useRef, useState } from "react";
import type { LayoutProps } from "../../types/component";
import { LINKS, RESUME_LINK } from "../../utils/constants/strings";
import Drawer from "../headless/Drawer";
// import Footer from "./Footer";
import Header from "./Header";


export default function DefaultLayout({ children } :LayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
    const handleClickOutside = (event: MouseEvent) => {
        // FIXME click indside triggered
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setDrawerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className="flex flex-col bg-secondary-200 dark:bg-primary-950 w-full min-h-screen">
            { drawerOpen && (
                <Drawer ref={ref} autoClose={true} direction="right" isClosed={!drawerOpen} toggleDrawer={toggleDrawer} wrapperClassName="w-full sm:w-1/2 bg-secondary-200 dark:bg-primary-950">
                    <div className="flex flex-col gap-6 mt-10 p-8 text-primary-950 dark:text-secondary-200">
                        {  
                            LINKS.map((link, index) => {
                                return (
                                    <a href={link.url} className="hover:border-b hover:border-blue-300 hover:text-blue-300 cursor-pointer" key={index}>
                                        {link.name}
                                    </a>
                                );
                            }) 
                        }
                        <a href={RESUME_LINK} target="_blank" className="block rounded-md border-2 border-primary-950 dark:border-secondary-200 hover:border-blue-300 dark:hover:border-blue-300 hover:text-blue-300 cursor-pointer bg-secondary-200 dark:bg-primary-950 px-4 py-1 focus:outline-none focus:ring-0"> 
                            Resume 
                        </a>
                    </div>
                </Drawer>
            )}
            <div className="flex flex-col items-center">
                <Header toggleDrawer={toggleDrawer} />
                {children}
                {/* <Footer /> */}
                <div className="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50">
                    <span className="inline-block 5xs:hidden">DEFAULT</span>
                    <span className="hidden 5xs:inline-block 4xs:hidden">5XS</span>
                    <span className="hidden 4xs:inline-block 3xs:hidden">4XS</span>
                    <span className="hidden 3xs:inline-block 2xs:hidden">3XS</span>
                    <span className="hidden 2xs:inline-block xs:hidden">2XS</span>
                    <span className="hidden xs:inline-block sm:hidden">XS</span>
                    <span className="hidden sm:inline-block md:hidden">SM</span>
                    <span className="hidden md:inline-block lg:hidden">MD</span>
                    <span className="hidden lg:inline-block xl:hidden">LG</span>
                    <span className="hidden xl:inline-block 2xl:hidden">XL</span>
                    <span className="hidden 2xl:inline-block 3xl:hidden">2XL</span>
                    <span className="hidden 3xl:inline-block 4xl:hidden">3XL</span>
                    <span className="hidden 4xl:inline-block">4XL</span>
                </div>
            </div>
        </div>
    );
}