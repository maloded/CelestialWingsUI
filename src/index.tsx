// import { App } from 'app/App';
import { Counter } from 'app/components/Counter';
import { Aircrafts } from 'app/components/Aircrafts';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <Counter />
    <Aircrafts />
  </BrowserRouter>,
  document.getElementById('root')
);
