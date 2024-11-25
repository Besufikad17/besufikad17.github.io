import { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";
import { DrawerProps } from "../../types/component";
import { getDrawerDirection } from "../../utils/functions/components";

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
    const {children, direction, isClosed, toggleDrawer, wrapperClassName } = props;

    const [className] = useState("fixed z-[1001] transition-all duration-300 ease-in h-screen shadow-md " + wrapperClassName); 
    const [drawerDirection] = useState(getDrawerDirection(direction, isClosed));

    if(isClosed) {
        return <></>;1
    }
    
    return (
        <div ref={ref} onClick={toggleDrawer} className={className + drawerDirection}>
            <button className="text-primary-950 dark:text-secondary-200 hover:text-blue-300 dark:hover:text-blue-300 [writing-mode:vertical-lr] text-base font-medium absolute top-2 lg:top-1/2 p-3 flex items-center gap-x-2 rounded-full z-50 lg:z-0 focus:outline-none focus:ring-0">
                <Icon icon="bx:bx-x" className="text-2xl" />
            </button>
            { children }
        </div>
    );
});

export default Drawer;