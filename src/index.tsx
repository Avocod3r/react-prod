import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';

const renderApp = (
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

render(renderApp, document.getElementById('root'));
