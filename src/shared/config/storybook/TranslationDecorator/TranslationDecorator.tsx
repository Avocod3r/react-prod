import { Story, StoryContext } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';

export const TranslationDecorator = (story: () => Story, { globals: { locale } }: StoryContext) => {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  return (
  // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>

        {story()}

      </I18nextProvider>
    </Suspense>
  );
};
