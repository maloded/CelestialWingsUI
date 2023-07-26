// import { useTheme } from './providers/ThemeProvider';
// import './styles/index.scss';
// import { Navbar } from 'widgets/Navbar';
// import { classNames } from 'shared/lib/classNames';
// import { Sidebar } from 'widgets/Sidebar';

// import { AppRouter } from './providers/router';
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from 'theme/useTheme';
import { setClassNames } from 'helpers/className/setClassNames';
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
          <Route path={ '/about' } element={ <AboutPageAsync /> } />
          <Route path={ '/' } element={ <MainPageAsync /> } />
        </Routes>
      </Suspense>
    </div>
  );
};
