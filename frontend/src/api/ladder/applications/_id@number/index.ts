/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * ラダー評価申請。
   * ラダー評価の前には必ず申請が必要です。
   */
  get: {
    status: 200
    resBody: Types.EvaluationApplication
  }

  /**
   * ラダー評価申請。
   * ラダー評価の前には必ず申請が必要です。
   */
  patch: {
    status: 200
    resBody: Types.EvaluationApplicationWrite
    reqFormat: FormData
    reqBody: Types.PatchedEvaluationApplicationWriteRequest
  }

  /**
   * ラダー評価申請。
   * ラダー評価の前には必ず申請が必要です。
   */
  delete: {
    status: 204
  }
}
