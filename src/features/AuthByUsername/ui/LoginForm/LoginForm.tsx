import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = ({ className } : LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input autoFocus placeholder={t('loginForm.usernameInput')} type="text" />
      <Input placeholder={t('loginForm.passwordInput')} type="text" />
      <Button>{t('loginForm.button')}</Button>
    </div>
  );
};

export default LoginForm;
