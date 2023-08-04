import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './accounts/users';
import type { Methods as Methods1 } from './accounts/users/_id@number';
import type { Methods as Methods2 } from './auth/csrf';
import type { Methods as Methods3 } from './auth/login';
import type { Methods as Methods4 } from './auth/login_user';
import type { Methods as Methods5 } from './auth/logout';
import type { Methods as Methods6 } from './auth/register';
import type { Methods as Methods7 } from './auth/token/refresh';
import type { Methods as Methods8 } from './ladder/applications';
import type { Methods as Methods9 } from './ladder/applications/_applicationPk@number/evaluation_summary';
import type { Methods as Methods10 } from './ladder/applications/_applicationPk@number/evaluations';
import type { Methods as Methods11 } from './ladder/applications/_applicationPk@number/evaluations/_id@number';
import type { Methods as Methods12 } from './ladder/applications/_id@number';
import type { Methods as Methods13 } from './ladder/applications/search';
import type { Methods as Methods14 } from './ladder/domains';
import type { Methods as Methods15 } from './ladder/domains/_id@number';
import type { Methods as Methods16 } from './ladder/sheets';
import type { Methods as Methods17 } from './ladder/sheets/_id@number';
import type { Methods as Methods18 } from './ladder/summary_additional_evaluation_items';
import type { Methods as Methods19 } from './schema';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/accounts/users';
  const PATH1 = '/auth/csrf';
  const PATH2 = '/auth/login';
  const PATH3 = '/auth/login_user';
  const PATH4 = '/auth/logout';
  const PATH5 = '/auth/register';
  const PATH6 = '/auth/token/refresh';
  const PATH7 = '/ladder/applications';
  const PATH8 = '/evaluation_summary';
  const PATH9 = '/evaluations';
  const PATH10 = '/ladder/applications/search';
  const PATH11 = '/ladder/domains';
  const PATH12 = '/ladder/sheets';
  const PATH13 = '/ladder/summary_additional_evaluation_items';
  const PATH14 = '/schema';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    accounts: {
      users: {
        _id: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            /**
             * ユーザー情報取得
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * ユーザー情報取得
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * ユーザー情報取得
         */
        get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * ユーザー情報取得
         */
        $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    auth: {
      csrf: {
        /**
         * CSRFトークンを取得します
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * CSRFトークンを取得します
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      login: {
        /**
         * Check the credentials and return the REST Token
         * if the credentials are valid and authenticated.
         * Calls Django Auth login method to register User ID
         * in Django session framework
         *
         * Accept the following POST parameters: username, password
         * Return the REST Framework Token Object's key.
         */
        post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option, 'FormData').json(),
        /**
         * Check the credentials and return the REST Token
         * if the credentials are valid and authenticated.
         * Calls Django Auth login method to register User ID
         * in Django session framework
         *
         * Accept the following POST parameters: username, password
         * Return the REST Framework Token Object's key.
         */
        $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      login_user: {
        /**
         * Reads and updates UserModel fields
         * Accepts GET, PUT, PATCH methods.
         *
         * Default accepted fields: username, first_name, last_name
         * Default display fields: pk, username, email, first_name, last_name
         * Read-only fields: pk, email
         *
         * Returns UserModel fields.
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
        /**
         * Reads and updates UserModel fields
         * Accepts GET, PUT, PATCH methods.
         *
         * Default accepted fields: username, first_name, last_name
         * Default display fields: pk, username, email, first_name, last_name
         * Read-only fields: pk, email
         *
         * Returns UserModel fields.
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        /**
         * Reads and updates UserModel fields
         * Accepts GET, PUT, PATCH methods.
         *
         * Default accepted fields: username, first_name, last_name
         * Default display fields: pk, username, email, first_name, last_name
         * Read-only fields: pk, email
         *
         * Returns UserModel fields.
         */
        put: (option: { body: Methods4['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['put']['resBody'], BasicHeaders, Methods4['put']['status']>(prefix, PATH3, PUT, option, 'FormData').json(),
        /**
         * Reads and updates UserModel fields
         * Accepts GET, PUT, PATCH methods.
         *
         * Default accepted fields: username, first_name, last_name
         * Default display fields: pk, username, email, first_name, last_name
         * Read-only fields: pk, email
         *
         * Returns UserModel fields.
         */
        $put: (option: { body: Methods4['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['put']['resBody'], BasicHeaders, Methods4['put']['status']>(prefix, PATH3, PUT, option, 'FormData').json().then(r => r.body),
        /**
         * Reads and updates UserModel fields
         * Accepts GET, PUT, PATCH methods.
         *
         * Default accepted fields: username, first_name, last_name
         * Default display fields: pk, username, email, first_name, last_name
         * Read-only fields: pk, email
         *
         * Returns UserModel fields.
         */
        patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, PATH3, PATCH, option, 'FormData').json(),
        /**
         * Reads and updates UserModel fields
         * Accepts GET, PUT, PATCH methods.
         *
         * Default accepted fields: username, first_name, last_name
         * Default display fields: pk, username, email, first_name, last_name
         * Read-only fields: pk, email
         *
         * Returns UserModel fields.
         */
        $patch: (option: { body: Methods4['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, PATH3, PATCH, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      logout: {
        /**
         * Calls Django logout method and delete the Token object
         * assigned to the current User object.
         *
         * Accepts/Returns nothing.
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json(),
        /**
         * Calls Django logout method and delete the Token object
         * assigned to the current User object.
         *
         * Accepts/Returns nothing.
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
      register: {
        /**
         * ユーザー登録
         */
        post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option, 'FormData').json(),
        /**
         * ユーザー登録
         */
        $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      token: {
        refresh: {
          /**
           * アクセストークンをリフレッシュします
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json(),
          /**
           * アクセストークンをリフレッシュします
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH6}`,
        },
      },
    },
    ladder: {
      applications: {
        _applicationPk: (val2: number) => {
          const prefix2 = `${PATH7}/${val2}`;

          return {
            evaluation_summary: {
              /**
               * 評価総括記録
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix2}${PATH8}`, GET, option).json(),
              /**
               * 評価総括記録
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix2}${PATH8}`, GET, option).json().then(r => r.body),
              /**
               * 評価総括記録
               */
              post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH8}`, POST, option, 'FormData').json(),
              /**
               * 評価総括記録
               */
              $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix2}${PATH8}`, POST, option, 'FormData').json().then(r => r.body),
              /**
               * 評価総括記録
               */
              patch: (option: { body: Methods9['patch']['reqBody'], config?: T | undefined }) =>
                fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, `${prefix2}${PATH8}`, PATCH, option, 'FormData').json(),
              /**
               * 評価総括記録
               */
              $patch: (option: { body: Methods9['patch']['reqBody'], config?: T | undefined }) =>
                fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, `${prefix2}${PATH8}`, PATCH, option, 'FormData').json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH8}`,
            },
            evaluations: {
              _id: (val4: number) => {
                const prefix4 = `${prefix2}${PATH9}/${val4}`;

                return {
                  /**
                   * ラダー評価
                   */
                  get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix4, GET, option).json(),
                  /**
                   * ラダー評価
                   */
                  $get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  /**
                   * ラダー評価
                   */
                  patch: (option: { body: Methods11['patch']['reqBody'], config?: T | undefined }) =>
                    fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, prefix4, PATCH, option, 'FormData').json(),
                  /**
                   * ラダー評価
                   */
                  $patch: (option: { body: Methods11['patch']['reqBody'], config?: T | undefined }) =>
                    fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, prefix4, PATCH, option, 'FormData').json().then(r => r.body),
                  /**
                   * ラダー評価
                   */
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                  /**
                   * ラダー評価
                   */
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              /**
               * ラダー評価
               */
              get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix2}${PATH9}`, GET, option).json(),
              /**
               * ラダー評価
               */
              $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix2}${PATH9}`, GET, option).json().then(r => r.body),
              /**
               * ラダー評価
               */
              post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option, 'FormData').json(),
              /**
               * ラダー評価
               */
              $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
                fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix2}${PATH9}`, POST, option, 'FormData').json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
        _id: (val2: number) => {
          const prefix2 = `${PATH7}/${val2}`;

          return {
            /**
             * ラダー評価申請。
             * ラダー評価の前には必ず申請が必要です。
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * ラダー評価申請。
             * ラダー評価の前には必ず申請が必要です。
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * ラダー評価申請。
             * ラダー評価の前には必ず申請が必要です。
             */
            patch: (option: { body: Methods12['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods12['patch']['resBody'], BasicHeaders, Methods12['patch']['status']>(prefix, prefix2, PATCH, option, 'FormData').json(),
            /**
             * ラダー評価申請。
             * ラダー評価の前には必ず申請が必要です。
             */
            $patch: (option: { body: Methods12['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods12['patch']['resBody'], BasicHeaders, Methods12['patch']['status']>(prefix, prefix2, PATCH, option, 'FormData').json().then(r => r.body),
            /**
             * ラダー評価申請。
             * ラダー評価の前には必ず申請が必要です。
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * ラダー評価申請。
             * ラダー評価の前には必ず申請が必要です。
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        search: {
          /**
           * 評価申請検索
           */
          get: (option?: { query?: Methods13['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH10, GET, option).json(),
          /**
           * 評価申請検索
           */
          $get: (option?: { query?: Methods13['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods13['get']['query'] } | undefined) =>
            `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH7, GET, option).json(),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        $get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH7, POST, option, 'FormData').json(),
        /**
         * ラダー評価申請。
         * ラダー評価の前には必ず申請が必要です。
         */
        $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH7, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      domains: {
        _id: (val2: number) => {
          const prefix2 = `${PATH11}/${val2}`;

          return {
            /**
             * 目標領域分類のヘッダーと項目
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * 目標領域分類のヘッダーと項目
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * 目標領域分類のヘッダーと項目
         */
        get: (option?: { query?: Methods14['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * 目標領域分類のヘッダーと項目
         */
        $get: (option?: { query?: Methods14['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods14['get']['query'] } | undefined) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      sheets: {
        _id: (val2: number) => {
          const prefix2 = `${PATH12}/${val2}`;

          return {
            /**
             * ラダーシート
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * ラダーシート
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            /**
             * ラダーシート
             */
            patch: (option: { body: Methods17['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods17['patch']['resBody'], BasicHeaders, Methods17['patch']['status']>(prefix, prefix2, PATCH, option, 'FormData').json(),
            /**
             * ラダーシート
             */
            $patch: (option: { body: Methods17['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods17['patch']['resBody'], BasicHeaders, Methods17['patch']['status']>(prefix, prefix2, PATCH, option, 'FormData').json().then(r => r.body),
            /**
             * ラダーシート
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            /**
             * ラダーシート
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * ラダーシート
         */
        get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH12, GET, option).json(),
        /**
         * ラダーシート
         */
        $get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
        /**
         * ラダーシート
         */
        post: (option: { body: Methods16['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods16['post']['resBody'], BasicHeaders, Methods16['post']['status']>(prefix, PATH12, POST, option, 'FormData').json(),
        /**
         * ラダーシート
         */
        $post: (option: { body: Methods16['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods16['post']['resBody'], BasicHeaders, Methods16['post']['status']>(prefix, PATH12, POST, option, 'FormData').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods16['get']['query'] } | undefined) =>
          `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      summary_additional_evaluation_items: {
        /**
         * 評価総括記録に追加する評価項目
         */
        get: (option?: { query?: Methods18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH13, GET, option).json(),
        /**
         * 評価総括記録に追加する評価項目
         */
        $get: (option?: { query?: Methods18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods18['get']['query'] } | undefined) =>
          `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    schema: {
      /**
       * OpenApi3 schema for this API. Format can be selected via content negotiation.
       *
       * - YAML: application/vnd.oai.openapi
       * - JSON: application/vnd.oai.openapi+json
       */
      get: (option?: { query?: Methods19['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * OpenApi3 schema for this API. Format can be selected via content negotiation.
       *
       * - YAML: application/vnd.oai.openapi
       * - JSON: application/vnd.oai.openapi+json
       */
      $get: (option?: { query?: Methods19['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods19['get']['query'] } | undefined) =>
        `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
