import React from 'react';
import {classNames} from "shared/lib";
import classes from './Navbar.module.scss';
import AppLink, {AppLinkAppearance} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.Links)}>
                <AppLink appearance={AppLinkAppearance.INVERTED} to={"/"}>Main Page</AppLink>
                <AppLink appearance={AppLinkAppearance.INVERTED} to={"/about"}>About Page</AppLink>
            </div>
        </div>
    );
};

export default Navbar;


