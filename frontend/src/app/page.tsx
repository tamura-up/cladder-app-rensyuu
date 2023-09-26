'use client';

import Link from 'next/link';
import { useCurrentUser } from '@/components/shared/CurrentUser/hooks/useCurrentUser';
import { Button } from '@mui/material';

export default function Home() {
  const { currentUser } = useCurrentUser();

  const onclick = () => {
    console.log('onclick');
  };

  return (
    <main>
      aaa
      <Link href='/login'>ログイン</Link>
      <Link href='/ladders/applications/create'>ラダー申請</Link>
      <div>
        current user:
        <div>{currentUser ? JSON.stringify(currentUser) : 'undefined'}</div>

        <div><Button onClick={onclick}>btn</Button></div>
      </div>
    </main>
  );
}