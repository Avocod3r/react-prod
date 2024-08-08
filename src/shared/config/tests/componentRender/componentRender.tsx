import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider';

interface ComponentRenderOptions {
  route: string;
  initialStore?: DeepPartial<StoreSchema>

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
