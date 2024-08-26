import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';
import LoginForm from '../LoginForm/LoginForm';

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
    <LoginForm />
  </Modal>
);

export default LoginModal;
