import { App } from './App';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme/ThemeProvider';
// import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
