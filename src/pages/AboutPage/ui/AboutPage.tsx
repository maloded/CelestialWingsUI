import { Counter } from 'components/Counter';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <div>{ t('About') }</div>
      <Counter />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;
