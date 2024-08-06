import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import classes from './Button.module.scss';

export enum ButtonAppearance {
    PRIMARY = '',
    CLEAR = 'Clear',
    CLEAR_INVERTED = 'ClearInverted',
    OUTLINE = 'Outline',
    BACKGROUND = 'Background',
    BACKGROUND_INVERTED = 'BackgroundInverted',
}

export enum ButtonSize {
    SMALL = 'Small',
    MEDIUM = 'Medium',
    LARGE = 'Large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    appearance?: ButtonAppearance;
    square?: boolean;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  className = '',
  appearance = ButtonAppearance.PRIMARY,
  type = 'button',
  children,
  square,
  size = ButtonSize.SMALL,
  ...props
}) => {
  const mods: Record<string, boolean> = {
    [classes.Square]: square,
  };
  return (
    <button
      type={type}
      className={classNames(classes.Button, mods, [className, classes[appearance], classes[size]])}
      {...props}
    >
      {children}

    </button>
  );
};

export default Button;
