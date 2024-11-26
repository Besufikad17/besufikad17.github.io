export type DrawerProps = {
    autoClose: boolean;
    children: JSX.Element;
    direction: 'left' | 'right';
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
}