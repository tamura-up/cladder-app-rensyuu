'use client';

import React from 'react';
import CreateAccountContainer from '@/components/accounts';
import { useRequireLogin } from '@/components/shared/CurrentUser/hooks/useRequireLogin';

export default function Home() {
  useRequireLogin();
  return (
    <div>
      <CreateAccountContainer />
    </div>
  );
}
