import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib';
import {
  AppLink, AppLinkAppearance, Button, ButtonAppearance,
} from 'shared/ui';
import { ButtonSize } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className } : SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { t } = useTranslation();

  const toggleHandle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        classes.Sidebar,
        { [classes.Collapsed]: collapsed },
        [className],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleHandle}
        className={classes.ToggleBtn}
        appearance={ButtonAppearance.BACKGROUND_INVERTED}
        square
        size={ButtonSize.LARGE}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.Items}>

        <AppLink
          appearance={AppLinkAppearance.INVERTED}
          to={RoutePath.main}
          className={classes.Item}
        >
          <MainIcon className={classes.Icon} />
          {!collapsed
          && <p>{t('navLinks.main')}</p>}
        </AppLink>

        <AppLink
          className={classes.Item}
          appearance={AppLinkAppearance.INVERTED}
          to={RoutePath.about}
        >
          <AboutIcon className={classes.Icon} />
          {!collapsed
          && <p>{t('navLinks.about')}</p>}
        </AppLink>
      </div>
      <div className={classes.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
