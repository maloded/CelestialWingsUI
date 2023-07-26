// import { Navbar } from 'widgets/Navbar';
// import { Sidebar } from 'widgets/Sidebar';
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppRouter } from './providers/router';
import { Link } from 'react-router-dom';
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
      <AppRouter />
    </div>
  );
};
