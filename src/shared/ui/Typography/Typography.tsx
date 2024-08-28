import { classNames } from 'shared/lib';
import classes from './Typography.module.scss';

export enum TypographyAppearance {
    PRIMARY = 'Primary',
    ERROR = 'Error'
}

interface TypographyProps {
    className?: string;
    text?: string;
    title?: string;
    appearance?:TypographyAppearance
}

const Typography = ({
  className, title, text, appearance = TypographyAppearance.PRIMARY,
} : TypographyProps) => (
  <div className={classNames(classes.Typography, { [classes[appearance]]: true }, [className])}>
    {title && <p className={classes.Title}>{title}</p>}
    {text && <p className={classes.Text}>{text}</p>}
  </div>
);

export default Typography;
