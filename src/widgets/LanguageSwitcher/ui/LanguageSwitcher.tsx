import {classNames} from "shared/lib";
import classes from './LanguageSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ButtonAppearance} from "shared/ui";

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({className} : LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en': 'uk');
    }

    return (
        <Button appearance={ButtonAppearance.CLEAR} onClick={toggleLanguage} className={classNames(classes.LanguageSwitcher, {}, [className])}>
            {t('button.language')}
        </Button>
    );
};

export default LanguageSwitcher;