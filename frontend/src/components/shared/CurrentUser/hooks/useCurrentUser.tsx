import { useAtom } from 'jotai';
import { currentUserAtom } from '@/lib/jotaiAtom';
import { useEffect } from 'react';
import { addMilliseconds } from 'date-fns';
import { apiClient, refreshToken } from '@/lib/apiClient';

/*
 * ログインしているユーザーを得る hook
 */
export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const isAuthChecking = currentUser === undefined; // ログイン情報を取得中かどうか


  /*
   * マウント時の認証
   * 参考: https://zenn.dev/catnose99/articles/2169dae14b58b6
   *      _app においてたが、next 13 移行に合わせてこちらに移動 (layout はサーバーサイドで構築される？ため)
   */
  useEffect(() => {
    (async function() {
      try {
        /* ****** デバッグ時用の暫定処理 ****** */
        // 以下2行ほんとはいらないはずだが、デバッグ時の(?)2重リクエストのときに2回認証しようとするのを回避する
        const refreshAt = localStorage.getItem('refreshAt');
        if (refreshAt && new Date(Number(refreshAt!)) >= addMilliseconds(new Date(), -1000)) return;
        /* ************ */

        const refreshPromise = refreshToken();
        if (refreshPromise !== null) {
          await refreshPromise;
        } else {
          // リフレッシュ不要で、ユーザー情報をすでに持っているときは何もしない
          if (!!currentUser) {
            return;
          }
        }
        console.log('fetch user');
        // サーバーへのログインリクエスト（未ログインの場合は401等を返している想定）
        const user = await apiClient.auth.login_user.$get();
        setCurrentUser(user);

      } catch {
        // 未ログイン（未ログイン時のリダイレクト処理などをここに書いても良いかも）
        setCurrentUser(null);
        localStorage.removeItem('tokenExpireAt');
      }
    })();
  }, []);

  return {
    currentUser,
    isAuthChecking,
  };
}