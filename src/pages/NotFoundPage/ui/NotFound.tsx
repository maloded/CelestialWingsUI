import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import css from './NotFound.module.scss';
import eyesGif from 'shared/assets/icons/eyes.gif';

interface NotFoundProps {
  className?: string;
};

const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation('not_found');

  return (
    <div className={ classNames(css.notFound, {}, [className]) }>
      <p className={ classNames(css.title) }>404</p>
      <p className={ classNames(css.message) }>
        { t('Oops') + '!' }
        <br />
        { t('Looks like you are lost') + '.' }
        <br />
        { t('There is nothing here') + '.' }
      </p>
      <img src={ eyesGif } alt='Suspicious' width={'200px'} />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFound;
