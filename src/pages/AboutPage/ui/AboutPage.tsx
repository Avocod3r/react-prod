import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t('pages.AboutPage.heading')}
        </div>
    );
};

export default AboutPage;