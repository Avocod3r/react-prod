import { useTranslation } from 'react-i18next';
import { Button, ButtonAppearance } from 'shared/ui';
import { classNames } from 'shared/lib';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean
}

const LanguageSwitcher = ({ className, short = false } : LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
  };

  return (
    <Button
      appearance={ButtonAppearance.CLEAR}
      onClick={toggleLanguage}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'button.language.short' : 'button.language.full')}
    </Button>
  );
};

export default LanguageSwitcher;
