"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      aaa
      <Link href="/login">ログイン</Link>
      <Link href="/ladders/applications/create">ラダー申請</Link>
    </main>
  )
}