import type { NextPageWithLayout } from 'next';
import { useRequireLogin } from '@/components/shared/CurrentUser/hooks/useRequireLogin';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  useRequireLogin();

  return (
    <div>
      <div>
        home page
        <ul>
          <li>
            <Link href="/accounts/create">accounts-carete</Link>
          </li>
          <li>
            <Link href="/ladders/applications/create">ladder-create</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
