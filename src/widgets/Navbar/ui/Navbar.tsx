import { useState } from 'react';
import { classNames } from 'shared/lib';
import { Button, ButtonAppearance, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button
        appearance={ButtonAppearance.CLEAR_INVERTED}
        onClick={() => setOpenAuthModal(true)}
        className={classNames(classes.Links)}
      >
        {t('button.login')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={openAuthModal} onClose={() => setOpenAuthModal(false)}>
        LOREM SAD SADS LOREM SAD SADS LOREM SAD SADS
        LOREM SAD SADSLOREM SAD SADS LOREM SAD SADS
        LOREM SAD SADS LOREM SAD SADS
      </Modal>
    </div>
  );
};

export default Navbar;
