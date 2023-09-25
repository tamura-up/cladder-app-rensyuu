/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 評価総括記録 */
  get: {
    status: 200
    resBody: Types.EvaluationSummary
  }

  /** 評価総括記録 */
  post: {
    status: 201
    resBody: Types.EvaluationSummary
    reqFormat: FormData
    reqBody: Types.EvaluationSummaryRequest
  }

  /** 評価総括記録 */
  patch: {
    status: 200
    resBody: Types.EvaluationSummary
    reqFormat: FormData
    reqBody: Types.PatchedEvaluationSummaryRequest
  }
}
