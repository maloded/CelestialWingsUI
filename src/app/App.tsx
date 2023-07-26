// import { Navbar } from 'widgets/Navbar';
// import { Sidebar } from 'widgets/Sidebar';
// import { AppRouter } from './providers/router';
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { MainPage } from '../pages/MainPage';
import { useTheme } from './providers/ThemeProvider';
import { setClassNames } from 'shared/lib/className/setClassNames';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // <div className={classNames('app', {}, [theme])}>
    //   <Suspense fallback="">
    //     <Navbar />
    //     <div className="content-page">
    //       <Sidebar />
    //       <AppRouter />
    //       <ThemeSwitcher />
    //     </div>
    //   </Suspense>
    // </div>
    <div className={ setClassNames('app', {}, [theme]) }>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={ '/' }>Main</Link>
      <Link to={ '/about' }>About</Link>
      <Suspense fallback={ <div>Loading...</div> }>
        <Routes>
          <Route path={ '/about' } element={ <AboutPage /> } />
          <Route path={ '/' } element={ <MainPage /> } />
        </Routes>
      </Suspense>
    </div>
  );
};
