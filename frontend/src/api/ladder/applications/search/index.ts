/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 評価申請検索 */
  get: {
    query?: {
      created__gte?: string | undefined
      created__lte?: string | undefined
      /** 評価者 */
      evaluator?: number | undefined
      /** Multiple values may be separated by commas. */
      level__in?: number[] | undefined
      /** Number of results to return per page. */
      limit?: number | undefined
      /** The initial index from which to return the results. */
      offset?: number | undefined
      /**
       * 順序
       * 
       * * `level` - Level
       * * `-level` - Level (descending)
       * * `status` - Status
       * * `-status` - Status (descending)
       * * `created` - 作成された
       * * `-created` - 作成された (descending)
       */
      ordering?: ('-created' | '-level' | '-status' | 'created' | 'level' | 'status')[] | undefined
      /** Multiple values may be separated by commas. */
      status__in?: string[] | undefined
      /** Multiple values may be separated by commas. */
      user__in?: number[] | undefined
    } | undefined

    status: 200
    resBody: Types.PaginatedSearchApplicationList
  }
}
