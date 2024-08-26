import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib';
import { Button, ButtonAppearance } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        appearance={ButtonAppearance.CLEAR_INVERTED}
        onClick={openAuthModal}
        className={classNames(classes.Links)}
      >
        {t('button.login')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Navbar;
