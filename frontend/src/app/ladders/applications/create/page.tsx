'use client';

import React from 'react';
import { useRequireLogin } from '@/components/shared/CurrentUser/hooks/useRequireLogin';
import CreateApplicationContainer from '@/components/ladders/applications/create';

export default function Home() {
  useRequireLogin();

  return (
    <div>
      <div>
        <CreateApplicationContainer />
      </div>
    </div>
  );
}
