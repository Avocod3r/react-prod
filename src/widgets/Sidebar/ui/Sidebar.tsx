import {useState} from "react";
import {classNames} from "shared/lib";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";

import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className} : SidebarProps) => {
    const [collapsed, setCollapsed] =useState<boolean>(false);

    const toggleHandle = () => {
        setCollapsed((prev) => !prev);
    }
    return (
        <div className={classNames(classes.Sidebar, {[classes.Collapsed] : collapsed }, [className])}>
            <button onClick={toggleHandle}>
                Toggle
            </button>
            <div className={classes.Switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;