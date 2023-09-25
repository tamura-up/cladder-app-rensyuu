/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** ラダー評価 */
  get: {
    status: 200
    resBody: Types.Evaluation
  }

  /** ラダー評価 */
  patch: {
    status: 200
    resBody: Types.EvaluationWrite
    reqFormat: FormData
    reqBody: Types.PatchedEvaluationWriteRequest
  }

  /** ラダー評価 */
  delete: {
    status: 204
  }
}
