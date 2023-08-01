import type { NextPageWithLayout } from 'next';
import { useRequireLogin } from '@/components/shared/CurrentUser/hooks/useRequireLogin';
import CreateApplicationContainer from '@/components/ladders/applications/create';

const LadderApplication: NextPageWithLayout = () => {
  const {loading}=useRequireLogin();
  if (loading) {
    return (<>loading...</>);
  } else {
    return (
      <div>
        <CreateApplicationContainer />
      </div>
    );
  }
};

export default LadderApplication;
