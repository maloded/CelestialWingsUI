import { Suspense } from 'react';
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Sidebar } from '../widgets/Sidebar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import './styles/index.scss';
import { useAppSelector } from 'store/hooks/redux';



export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
          <ThemeSwitcher />
        </div>
      </Suspense>
    </div>
  );
};
