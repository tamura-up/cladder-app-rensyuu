import { useAtom } from 'jotai';
import { currentUserAtom } from '@/lib/jotaiAtom';

/*
 * ログインしているユーザーを得る hook
 */
export function useCurrentUser() {
  const [currentUser,] = useAtom(currentUserAtom);
  const isAuthChecking = currentUser === undefined; // ログイン情報を取得中かどうか
  return {
    currentUser,
    isAuthChecking
  };
}