import { classNames } from 'shared/lib';
import { ReactNode } from 'react';
import classes from './ThemeBlock.module.scss';

interface ThemeBlockProps {
    className?: string;
    fill?: boolean;
    left?: boolean;
    children?: ReactNode;
}

const ThemeBlock = ({
  className, fill, left, children,
}: ThemeBlockProps) => (
  <div className={classNames(classes.ThemeBlock, {
    [classes.Fill]: fill,
    [classes.Left]: left,
  }, [className])}
  >
    {children}
  </div>
);

export default ThemeBlock;
