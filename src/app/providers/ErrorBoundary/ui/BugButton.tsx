import { Button, ThemeButton } from 'shared/ui/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useEffect, useState } from 'react';
import BugIcon from 'shared/assets/icons/bug.svg';
import BugIconLidht from 'shared/assets/icons/bug-light.svg';

export const BugButton = () => {
  const { theme } = useTheme();
  const [error, setError] = useState(false);

  const throwError = () => setError((error) => !error);
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button theme={ ThemeButton.CLEAR } onClick={ throwError }>
      { theme === Theme.DARK ? <BugIcon /> : <BugIconLidht /> }
    </Button>
  );
};
