import { useState } from "react";
import { Icon } from "@iconify/react";
import { ToastProps } from "../types/component";

export function Toast(props: ToastProps) {
    const { message, show, type } = props;

    const [displayToast, setDisplayToast] = useState(show);

    if(displayToast) {
        if(type === "error") {
            return (
                <div className="fixed flex items-center w-full max-w-xs p-4 rounded-lg shadow z-50 bg-red-100 text-red-500">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-red-100 text-red-500">
                        <Icon icon="material-symbols:error" />
                    </div>
                    <div className="ms-3 text-sm font-normal">{ message }</div>
                    <button onClick={() => setDisplayToast(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8 bg-red-100 text-blue-500 hover:bg-blue-500 hover:text-white">
                        <Icon icon="material-symbols:close" />
                    </button>
                </div>
            );
        }else if(type === "message") {
            <div className="fixed flex items-center w-full max-w-xs p-4 rounded-lg shadow z-50 bg-blue-100 text-blue-500">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-blue-500">
                    <Icon icon="lucide:info" />
                </div>
                <div className="ms-3 text-sm font-normal">{ message }</div>
                <button onClick={() => setDisplayToast(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8 bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white">
                    <Icon icon="material-symbols:close" />
                </button>
            </div>
        }else {
            <div className="fixed flex items-center w-full max-w-xs p-4 rounded-lg shadow z-50 bg-green-100 text-green-500">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-500">
                    <Icon icon="lucide:info" />
                </div>
                <div className="ms-3 text-sm font-normal">{ message }</div>
                <button onClick={() => setDisplayToast(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 inline-flex items-center justify-center h-8 w-8 bg-green-100 text-green-500 hover:bg-green-500 hover:text-white">
                    <Icon icon="material-symbols:close" />
                </button>
            </div>
        }
    }

    return (
        <></>
    );
}