import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib';
import { Button, ButtonAppearance } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <Button
          appearance={ButtonAppearance.BACKGROUND}
          onClick={handleLogout}
        >
          {t('button.logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        appearance={ButtonAppearance.CLEAR_INVERTED}
        onClick={openAuthModal}
      >
        {t('button.login')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Navbar;
