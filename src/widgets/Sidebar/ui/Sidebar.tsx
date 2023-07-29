import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import css from './Sidebar.module.scss';


interface SideBarProps {
  className?: string;
};  

export const Sidebar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
      <button data-testid={'sidebar-toggle'} onClick={ onToggle }>
        { t('Toggle') }
      </button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
        <BugButton />
      </div>
    </div>
  );
};
