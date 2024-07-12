import React from 'react';
import {classNames} from "shared/lib";
import {AppLink, AppLinkAppearance} from "shared/ui";
import {ThemeSwitcher} from "shared/ui";
import classes from './Navbar.module.scss';


interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(classes.Links)}>
                <AppLink appearance={AppLinkAppearance.INVERTED} to={"/"}>Main Page</AppLink>
                <AppLink appearance={AppLinkAppearance.INVERTED} to={"/about"}>About Page</AppLink>
            </div>
        </div>
    );
};

export default Navbar;


