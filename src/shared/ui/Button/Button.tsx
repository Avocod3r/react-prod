import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import classes from './Button.module.scss';

export enum ButtonAppearance {
    CLEAR = 'Clear',
    SECONDARY = 'Secondary',
    INVERTED = 'Inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    appearance?: ButtonAppearance
}

const Button: FC<ButtonProps> = ({
  className = '',
  appearance = ButtonAppearance.CLEAR,
  type = 'button',
  children,
  ...props
}) => (
  <button
    type={type}
    className={classNames(classes.Button, {}, [className, classes[appearance]])}
    {...props}
  >
    {children}

  </button>
);

export default Button;
