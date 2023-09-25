import type { NextPageWithLayout } from 'next';
import { useRequireLogin } from '@/components/shared/CurrentUser/hooks/useRequireLogin';
import CreateAccountContainer from '@/components/accounts';

const Home: NextPageWithLayout = () => {
  useRequireLogin();

  return (
    <div>
      <CreateAccountContainer />
    </div>
  );
};

export default Home;
