import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import MenuIcon from 'shared/assets/icons/open-menu.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import css from './Sidebar.module.scss';


interface SideBarProps {
  className?: string;
};  

export const Sidebar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useTheme();

  const { t } = useTranslation(['about', 'main']);


  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid={ 'sidebar' }
      className={ classNames(
        css.sidebar,
        { [css.collapsed]: collapsed },
        [className]
      ) }
    >
      <div className={ css.links }>
        <AppLink
          className={ css.item }
          theme={ AppLinkTheme.PRIMARY }
          to={ RoutePath.main }
        >
          <HomeIcon className={ css.icon } />
          <span className={ css.link }>{ t('Home page', { ns: 'main' }) }</span>
        </AppLink>
        <AppLink className={ css.item } to={ RoutePath.about }>
          <AboutIcon className={ css.icon } />
          <span className={ css.link }>{ t('About', { ns: 'about' })}</span>
        </AppLink>
      </div>
      <div className={ css.switchers }>
        <LangSwitcher />
        { /* <BugButton /> */ }
        <Button
          data-testid={ 'sidebar-toggle' }
          theme={ theme === Theme.DARK ? ButtonTheme.FILLED : ButtonTheme.SHADOW }
          className={ css.toggle }
          onClick={ onToggle }
          isSquare={ true }
          isRound={ true }
          size={ ButtonSize.M }
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};
