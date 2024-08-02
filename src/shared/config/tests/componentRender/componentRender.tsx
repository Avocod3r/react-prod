import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
  route: string;

}

export function componentRender(component:ReactNode, options?: ComponentRenderOptions) {
  const { route = '/' } = options;
  render(
    <I18nextProvider i18n={i18nForTests}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </I18nextProvider>,
  );
}
