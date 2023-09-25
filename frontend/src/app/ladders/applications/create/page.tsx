'use client';

import { useCurrentUser } from '@/components/shared/CurrentUser/hooks/useCurrentUser';
import React, { useEffect } from 'react';
import { useRequireLogin } from '@/components/shared/CurrentUser/hooks/useRequireLogin';

import { useRouter } from 'next/navigation';
import CreateApplicationContainer from '@/components/ladders/applications/create';

export default function Home() {
  const { currentUser, isAuthChecking } = useCurrentUser();
  useRequireLogin();

  const router = useRouter();
  useEffect(() => {
    if (isAuthChecking) return;
    if (!!currentUser) router.push('/');
  }, [isAuthChecking, currentUser]);

  return (
    <div>
      <div>
        <CreateApplicationContainer />
      </div>
    </div>
  );
}
