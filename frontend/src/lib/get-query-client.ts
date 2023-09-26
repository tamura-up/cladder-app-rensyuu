import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

/*
 * 参考: https://blog.gogrow.dev/setting-up-react-query-in-your-next-js-13-app-e8edea0d20cc
 */

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      // 5 min
      staleTime: 5 * 60 * 1000,
      // ブラウザのコンポーネントにフォーカスを当てた時に自動でフェッチしない
      refetchOnWindowFocus: false,
    },
  },
};

// NOTE: Hydrate を使用するときの client だと思う。 参考サイト step3 参照
const getQueryClient = cache(() => new QueryClient(
  queryClientConfig,
));
export default getQueryClient;