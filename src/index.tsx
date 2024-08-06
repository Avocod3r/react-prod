import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const root = document.getElementById('root');

if (!root) throw Error('Root container not found');

const renderApp = (
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>
);

render(renderApp, root);
