import ReactDOM from 'react-dom/client';
import { App } from 'app/App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/theme-context/ThemeProvider';
import { StrictMode } from 'react';

import 'shared/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
