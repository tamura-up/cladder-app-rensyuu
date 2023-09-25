/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * ラダー評価申請。
   * ラダー評価の前には必ず申請が必要です。
   */
  get: {
    query?: {
      /** Number of results to return per page. */
      limit?: number | undefined
      /** The initial index from which to return the results. */
      offset?: number | undefined
    } | undefined

    status: 200
    resBody: Types.PaginatedEvaluationApplicationList
  }

  /**
   * ラダー評価申請。
   * ラダー評価の前には必ず申請が必要です。
   */
  post: {
    status: 201
    resBody: Types.EvaluationApplicationWrite
    reqFormat: FormData
    reqBody: Types.EvaluationApplicationWriteRequest
  }
}
