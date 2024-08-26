import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {t('pages.MainPage.heading')}
      <div style={{ border: '1px solid red' }}>
        <BugButton />
      </div>
      <Input onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default MainPage;
