import { classNames } from 'shared/lib';
import {
  FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeHandler]);

  const contentClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const mods:Record<string, boolean> = {
    [classes.Opened]: isOpen,
    [classes.IsClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(classes.Modal, mods, [className])}>
        <div className={classes.Overlay} onClick={closeHandler}>
          <div className={classes.Content} onClick={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
