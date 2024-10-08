import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
  route: string;
  initialStore?: DeepPartial<StateSchema>

}

export function componentRender(component:ReactNode, options?: ComponentRenderOptions) {
  const { route, initialStore } = options;
  render(
    <StoreProvider initialStore={initialStore}>
      <I18nextProvider i18n={i18nForTests}>
        <MemoryRouter initialEntries={[route]}>
          {component}
        </MemoryRouter>
      </I18nextProvider>
    </StoreProvider>,
  );
}
