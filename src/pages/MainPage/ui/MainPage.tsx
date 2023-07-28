import { Aircrafts } from 'components/Aircrafts';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  
  return (
    <div>
      <div>{ t('Home page') }</div>
      <Aircrafts />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default MainPage;
