import { classNames } from 'shared/lib';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.Navbar, {}, [className])}>
    <div className={classNames(classes.Links)}>
      /
    </div>
  </div>
);

export default Navbar;
