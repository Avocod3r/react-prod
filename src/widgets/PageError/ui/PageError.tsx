import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ButtonAppearance } from 'shared/ui';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className } : PageErrorProps) => {
  const { t } = useTranslation();

  const handleReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <h3>
        {t('PageError.heading')}
      </h3>
      <Button appearance={ButtonAppearance.OUTLINE} onClick={handleReload}>
        {t('PageError.button')}
      </Button>
    </div>
  );
};

export default PageError;
