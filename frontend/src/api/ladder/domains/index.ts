/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 目標領域分類のヘッダーと項目 */
  get: {
    query?: {
      /** Number of results to return per page. */
      limit?: number | undefined
      /** The initial index from which to return the results. */
      offset?: number | undefined
    } | undefined

    status: 200
    resBody: Types.PaginatedLadderDomainList
  }
}
