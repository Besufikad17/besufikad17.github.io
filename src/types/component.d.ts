export type ContactProps = {
    setShowToast: (x: boolean) => void;
    setToastType: (type: string) => void;
    setToastMessage: (message: string) => void;
};

export type DrawerProps = {
    autoClose: boolean;
    children: JSX.Element;
    direction: "left" | "right";
    isClosed: boolean;
    toggleDrawer: () => void;
    wrapperClassName: string;
};

export type HeaderProps = {
    toggleDrawer: () => void;
    setSection: (section: string) => void;
}

export type LayoutProps = {
    children: JSX.Element;
    section: string;
    setSection: (section: string) => void;
    showToast: boolean;
    toastMessage: string;
    toastType: string;
}

export type ToastProps = {
    message: string;
    show: boolean;
    type: string;
}