import { FC } from 'react';
import { Button, Variant } from 'shared/ui/Button';
import styles from './MainPage.module.scss';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.MainPage}>
      {t('home')}
      <Button>Default</Button>
      <Button variant={Variant.PRIMARY}>Primary</Button>
      <Button variant={Variant.ERROR}>Default</Button>
      <Button ghost>Ghost Default</Button>
      <Button ghost variant={Variant.PRIMARY}>
        Ghost Primary
      </Button>
      <Button ghost variant={Variant.ERROR}>
        Ghost Default
      </Button>
      <Button block variant={Variant.PRIMARY}>
        Primary
      </Button>
    </div>
  );
};

export default MainPage;
