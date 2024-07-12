import {classNames, useTheme} from "shared/lib";
import classes from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import UserImage from 'shared/assets/icons/user-32-32.png';
import {Theme} from "shared/ui";
import {Button} from "shared/ui";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme,toggleTheme} = useTheme();
    return (
        <Button
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;