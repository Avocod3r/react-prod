import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib";
import classes from './AppLink.module.scss';

export enum AppLinkAppearance {
    PRIMARY = 'Primary',
    SECONDARY = 'Secondary',
    INVERTED = 'Inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    appearance?: AppLinkAppearance
}

const AppLink: FC<AppLinkProps> = ({className, appearance = AppLinkAppearance.PRIMARY, children, ...props}) => {
    return (
        <Link className={classNames(classes.AppLink, {}, [className, classes[appearance]])} {...props}>
            {children}
        </Link>
    );
};

export default AppLink;