import { classNames } from 'shared/lib';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({ className } : LoaderProps) => (
  <div className={classNames(classes.Loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
