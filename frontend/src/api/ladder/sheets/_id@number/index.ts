/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** ラダーシート */
  get: {
    status: 200
    resBody: Types.LadderSheet
  }

  /** ラダーシート */
  patch: {
    status: 200
    resBody: Types.LadderSheet
    reqFormat: FormData
    reqBody: Types.PatchedLadderSheetRequest
  }

  /** ラダーシート */
  delete: {
    status: 204
  }
}
