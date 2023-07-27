// import { Sidebar } from 'widgets/Sidebar';
// import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Navbar } from './widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Sidebar } from './widgets/Sidebar';
import './styles/index.scss';


export const App = () => {
  const { theme } = useTheme();

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
    <div className={ classNames('app', {}, [theme]) }>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
