import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from './csrf';
import type { Methods as Methods1 } from './login';
import type { Methods as Methods2 } from './login_user';
import type { Methods as Methods3 } from './logout';
import type { Methods as Methods4 } from './register';
import type { Methods as Methods5 } from './token/refresh';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/auth/csrf';
  const PATH1 = '/auth/login';
  const PATH2 = '/auth/login_user';
  const PATH3 = '/auth/logout';
  const PATH4 = '/auth/register';
  const PATH5 = '/auth/token/refresh';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const PATCH = 'PATCH';

  return {
    csrf: {
      /**
       * CSRFトークンを取得します
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * CSRFトークンを取得します
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
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
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json(),
      /**
       * Check the credentials and return the REST Token
       * if the credentials are valid and authenticated.
       * Calls Django Auth login method to register User ID
       * in Django session framework
       *
       * Accept the following POST parameters: username, password
       * Return the REST Framework Token Object's key.
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
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
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
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
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
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
      put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'FormData').json(),
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
      $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['put']['resBody'], BasicHeaders, Methods2['put']['status']>(prefix, PATH2, PUT, option, 'FormData').json().then(r => r.body),
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
      patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, PATH2, PATCH, option, 'FormData').json(),
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
      $patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, PATH2, PATCH, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    logout: {
      /**
       * Calls Django logout method and delete the Token object
       * assigned to the current User object.
       *
       * Accepts/Returns nothing.
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Calls Django logout method and delete the Token object
       * assigned to the current User object.
       *
       * Accepts/Returns nothing.
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    register: {
      /**
       * ユーザー登録
       */
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option, 'FormData').json(),
      /**
       * ユーザー登録
       */
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    token: {
      refresh: {
        /**
         * アクセストークンをリフレッシュします
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * アクセストークンをリフレッシュします
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
