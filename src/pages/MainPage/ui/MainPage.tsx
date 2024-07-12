import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t('pages.MainPage.heading')}
        </div>
    );
};

export default MainPage;