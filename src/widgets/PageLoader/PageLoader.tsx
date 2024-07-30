import { classNames } from 'shared/lib';
import Loader from 'shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className } : PageLoaderProps) => {
  console.log('');
  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
