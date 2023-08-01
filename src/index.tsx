import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Provider } from 'react-redux'; 
import { setupStore } from 'store/store';
import 'shared/config/i18n/i18n';

const store = setupStore();

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
