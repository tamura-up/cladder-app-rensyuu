import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_applicationPk@number/evaluation_summary';
import type { Methods as Methods2 } from './_applicationPk@number/evaluations';
import type { Methods as Methods3 } from './_applicationPk@number/evaluations/_id@number';
import type { Methods as Methods4 } from './_id@number';
import type { Methods as Methods5 } from './search';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/ladder/applications';
  const PATH1 = '/evaluation_summary';
  const PATH2 = '/evaluations';
  const PATH3 = '/ladder/applications/search';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    _applicationPk: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        evaluation_summary: {
          /**
           * 評価総括記録
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * 評価総括記録
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * 評価総括記録
           */
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json(),
          /**
           * 評価総括記録
           */
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
          /**
           * 評価総括記録
           */
          patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, `${prefix0}${PATH1}`, PATCH, option, 'FormData').json(),
          /**
           * 評価総括記録
           */
          $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, `${prefix0}${PATH1}`, PATCH, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        evaluations: {
          _id: (val2: number) => {
            const prefix2 = `${prefix0}${PATH2}/${val2}`;

            return {
              /**
               * ラダー評価
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix2, GET, option).json(),
              /**
               * ラダー評価
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              /**
               * ラダー評価
               */
              patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix2, PATCH, option, 'FormData').json(),
              /**
               * ラダー評価
               */
              $patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix2, PATCH, option, 'FormData').json().then(r => r.body),
              /**
               * ラダー評価
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              /**
               * ラダー評価
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
          /**
           * ラダー評価
           */
          get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * ラダー評価
           */
          $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          /**
           * ラダー評価
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json(),
          /**
           * ラダー評価
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, prefix0, PATCH, option, 'FormData').json(),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        $patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, prefix0, PATCH, option, 'FormData').json().then(r => r.body),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    search: {
      /**
       * 評価申請検索
       */
      get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 評価申請検索
       */
      $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * ラダー評価申請。
     * ラダー評価の前には必ず申請が必要です。
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * ラダー評価申請。
     * ラダー評価の前には必ず申請が必要です。
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * ラダー評価申請。
     * ラダー評価の前には必ず申請が必要です。
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
    /**
     * ラダー評価申請。
     * ラダー評価の前には必ず申請が必要です。
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
