import { FC } from 'react';
import { Button, Variant } from 'shared/ui/Button';
import styles from './MainPage.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <div className={styles.MainPage}>
      MainPage
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
