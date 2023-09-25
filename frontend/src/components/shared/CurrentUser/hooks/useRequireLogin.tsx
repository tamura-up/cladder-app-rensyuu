import { useCurrentUser } from './useCurrentUser';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/*
 * ログインしていない場合にリダイレクトする hook
 */
export function useRequireLogin() {
  const { currentUser, isAuthChecking } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthChecking) return; // まだ確認中

    if (!currentUser) router.push('/'); // 未ログインだったのでリダイレクト
  }, [isAuthChecking, currentUser]);
  const loading=  isAuthChecking;
  return {loading}
}