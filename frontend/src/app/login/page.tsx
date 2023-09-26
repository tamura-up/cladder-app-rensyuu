'use client';

import { useCurrentUser } from '@/components/shared/CurrentUser/hooks/useCurrentUser';
import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation'
import LoginBox from '@/components/Login/LoginBox';
export default function Home() {
  const { currentUser, isAuthChecking } = useCurrentUser();

  const router = useRouter()
  useEffect(() => {
    if (isAuthChecking) return;
    if (!!currentUser) router.push('/');
  }, [isAuthChecking, currentUser]);

  return (
    <div>
      <div>
        <LoginBox />
      </div>
    </div>
  );
}
