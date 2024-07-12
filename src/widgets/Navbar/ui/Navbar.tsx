import React from 'react';
import {classNames} from "shared/lib";
import {AppLink, AppLinkAppearance} from "shared/ui";
import {ThemeSwitcher} from "shared/ui";
import classes from './Navbar.module.scss';
import {useTranslation} from "react-i18next";


interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.Links)}>
                <AppLink appearance={AppLinkAppearance.INVERTED} to={"/"}>{t('navLinks.main')}</AppLink>
                <AppLink appearance={AppLinkAppearance.INVERTED} to={"/about"}>{t('navLinks.about')}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;


