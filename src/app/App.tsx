import { FC, Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'shared/theme-context';
import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback='loading'>
        <Navbar />
        <div className='page container mx-auto'>
          <aside className='aside'>
            <Sidebar />
          </aside>
          <main className='main'>
            <AppRouter />
          </main>
        </div>
      </Suspense>
    </div>
  );
};
