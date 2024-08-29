import { classNames, useReducerManager, ReducersList } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Button,
  Input,
  ButtonAppearance,
  TypographyAppearance,
} from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChangeEvent, memo, useCallback,
} from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
  getLoginStateError,
  getLoginStateLoading,
  getLoginStatePassword,
  getLoginStateUsername,
} from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const reducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className } : LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginStateUsername);
  const password = useSelector(getLoginStatePassword);
  const isLoading = useSelector(getLoginStateLoading);
  const error = useSelector(getLoginStateError);

  useReducerManager({
    reducers,
    removeAfterUnmount: true,
  });

  const handleUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(event.currentTarget.value));
  }, [dispatch]);

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(event.currentTarget.value));
  }, [dispatch]);

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Typography title={t('loginForm.title')} />
      {error && <Typography text={t('loginForm.error')} appearance={TypographyAppearance.ERROR} />}
      <Input
        autoFocus
        placeholder={t('loginForm.usernameInput')}
        type="text"
        onChange={handleUsernameChange}
        value={username}
      />
      <Input
        placeholder={t('loginForm.passwordInput')}
        type="text"
        onChange={handlePasswordChange}
        value={password}
      />
      <Button
        onClick={handleLogin}
        disabled={isLoading}
        appearance={ButtonAppearance.BACKGROUND}
      >
        {t('loginForm.button')}
      </Button>
    </div>
  );
});

export default LoginForm;
