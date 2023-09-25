import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './applications';
import type { Methods as Methods1 } from './applications/_applicationPk@number/evaluation_summary';
import type { Methods as Methods2 } from './applications/_applicationPk@number/evaluations';
import type { Methods as Methods3 } from './applications/_applicationPk@number/evaluations/_id@number';
import type { Methods as Methods4 } from './applications/_id@number';
import type { Methods as Methods5 } from './applications/search';
import type { Methods as Methods6 } from './domains';
import type { Methods as Methods7 } from './domains/_id@number';
import type { Methods as Methods8 } from './sheets';
import type { Methods as Methods9 } from './sheets/_id@number';
import type { Methods as Methods10 } from './summary_additional_evaluation_items';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/ladder/applications';
  const PATH1 = '/evaluation_summary';
  const PATH2 = '/evaluations';
  const PATH3 = '/ladder/applications/search';
  const PATH4 = '/ladder/domains';
  const PATH5 = '/ladder/sheets';
  const PATH6 = '/ladder/summary_additional_evaluation_items';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    applications: {
      _applicationPk: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          evaluation_summary: {
            /**
             * 評価総括記録
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * 評価総括記録
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            /**
             * 評価総括記録
             */
            post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option, 'FormData').json(),
            /**
             * 評価総括記録
             */
            $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
            /**
             * 評価総括記録
             */
            patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, `${prefix1}${PATH1}`, PATCH, option, 'FormData').json(),
            /**
             * 評価総括記録
             */
            $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, `${prefix1}${PATH1}`, PATCH, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
          evaluations: {
            _id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH2}/${val3}`;

              return {
                /**
                 * ラダー評価
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * ラダー評価
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                /**
                 * ラダー評価
                 */
                patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix3, PATCH, option, 'FormData').json(),
                /**
                 * ラダー評価
                 */
                $patch: (option: { body: Methods3['patch']['reqBody'], config?: T | undefined }) =>
                  fetch<Methods3['patch']['resBody'], BasicHeaders, Methods3['patch']['status']>(prefix, prefix3, PATCH, option, 'FormData').json().then(r => r.body),
                /**
                 * ラダー評価
                 */
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                /**
                 * ラダー評価
                 */
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            /**
             * ラダー評価
             */
            get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * ラダー評価
             */
            $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * ラダー評価
             */
            post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option, 'FormData').json(),
            /**
             * ラダー評価
             */
            $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option, 'FormData').json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * ラダー評価申請。
           * ラダー評価の前には必ず申請が必要です。
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * ラダー評価申請。
           * ラダー評価の前には必ず申請が必要です。
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * ラダー評価申請。
           * ラダー評価の前には必ず申請が必要です。
           */
          patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').json(),
          /**
           * ラダー評価申請。
           * ラダー評価の前には必ず申請が必要です。
           */
          $patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').json().then(r => r.body),
          /**
           * ラダー評価申請。
           * ラダー評価の前には必ず申請が必要です。
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * ラダー評価申請。
           * ラダー評価の前には必ず申請が必要です。
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
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
    },
    domains: {
      _id: (val1: number) => {
        const prefix1 = `${PATH4}/${val1}`;

        return {
          /**
           * 目標領域分類のヘッダーと項目
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 目標領域分類のヘッダーと項目
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * 目標領域分類のヘッダーと項目
       */
      get: (option?: { query?: Methods6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * 目標領域分類のヘッダーと項目
       */
      $get: (option?: { query?: Methods6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    sheets: {
      _id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * ラダーシート
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * ラダーシート
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * ラダーシート
           */
          patch: (option: { body: Methods9['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').json(),
          /**
           * ラダーシート
           */
          $patch: (option: { body: Methods9['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').json().then(r => r.body),
          /**
           * ラダーシート
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * ラダーシート
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * ラダーシート
       */
      get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * ラダーシート
       */
      $get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * ラダーシート
       */
      post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH5, POST, option, 'FormData').json(),
      /**
       * ラダーシート
       */
      $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH5, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    summary_additional_evaluation_items: {
      /**
       * 評価総括記録に追加する評価項目
       */
      get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * 評価総括記録に追加する評価項目
       */
      $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
