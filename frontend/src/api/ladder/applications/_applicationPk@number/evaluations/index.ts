/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ラダー評価 */
  get: {
    query?: {
      /** Number of results to return per page. */
      limit?: number | undefined
      /** The initial index from which to return the results. */
      offset?: number | undefined
    } | undefined

    status: 200
    resBody: Types.PaginatedEvaluationList
  }

  /** ラダー評価 */
  post: {
    status: 201
    resBody: Types.EvaluationWrite
    reqFormat: FormData
    reqBody: Types.EvaluationWriteRequest
  }
}
