import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className } : NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t('pages.NotFoundPage.heading')}
    </div>
  );
};

export default NotFoundPage;
