'use client';

import Link from 'next/link';
import { useCurrentUser } from '@/components/shared/CurrentUser/hooks/useCurrentUser';

export default function Home() {
  const { currentUser } = useCurrentUser();

  return (
    <main>
      aaa
      <Link href='/login'>ログイン</Link>
      <Link href='/ladders/applications/create'>ラダー申請</Link>
      <div>
        current user:
        <div>{currentUser ? JSON.stringify(currentUser) : 'undefined'}</div>
      </div>
    </main>
  );
}