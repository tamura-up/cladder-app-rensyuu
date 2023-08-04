/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ユーザー情報取得 */
  get: {
    query?: {
      /** Number of results to return per page. */
      limit?: number | undefined
      /** The initial index from which to return the results. */
      offset?: number | undefined
      /** A search term. */
      search?: string | undefined
    } | undefined

    status: 200
    resBody: Types.PaginatedUserList
  }
}
