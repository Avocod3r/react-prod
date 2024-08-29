import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen:boolean,
    onClose: () => void,
}

const LoginModal = ({ className, isOpen, onClose } : LoginModalProps) => (
  <Modal
    lazy
    isOpen={isOpen}
    onClose={onClose}
    className={classNames('', {}, [className])}
  >
    <LoginFormAsync />
  </Modal>
);

export default LoginModal;
