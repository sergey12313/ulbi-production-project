import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  const { t } = useTranslation();
  return <div>{t('about')}</div>;
};

export default AboutPage;
