/* eslint-disable */
import type { ReadStream } from 'fs'

export type CSRFResponse = {
  csrfToken: string
}

/** ラダー評価 */
export type Evaluation = {
  id: number

  /** 評価者 */
  evaluator: User

  created: string | null
  modified: string | null
  /**
   * * `SELF` - 自己評価
   * * `COWORKER` - 同僚評価
   * * `HEAD` - 上長評価
   */
  evaluatorType: 'SELF' | 'COWORKER' | 'HEAD'
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 各評価項目の評価点を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  application: number
}

/** ラダー評価申請 */
export type EvaluationApplication = {
  id: number

  /** 申請ユーザー */
  user: User

  sheet: LadderSheet
  created: string | null
  modified: string | null
  level: number
  /**
   * * `ONGOING` - 実施中
   * * `CANCELED` - キャンセル
   * * `FINISHED` - 評価済
   */
  status?: 'ONGOING' | 'CANCELED' | 'FINISHED' | undefined
  /** 評価総括が記録されたときにその結果が反映されます。(1: 可, 0: 保留) */
  result: number | null
}

/** ラダー評価申請登録 */
export type EvaluationApplicationWrite = {
  id: number
  /** 申請者ユーザーID */
  user: number
  /** ラダーシートID */
  sheet: number
  created: string | null
  modified: string | null
  /** 評価総括が記録されたときにその結果が反映されます。(1: 可, 0: 保留) */
  result: number | null
}

/** ラダー評価申請登録 */
export type EvaluationApplicationWriteRequest = {
  /** 申請者ユーザーID */
  user: number
  /** ラダーシートID */
  sheet: number
}

/** 評価総括記録 */
export type EvaluationSummary = {
  id: number

  /** 評価責任者 */
  supervisor: User

  created: string | null
  modified: string | null
  /**
   * 1: 可, 0: 保留
   * 
   * * `0` - Ng
   * * `1` - Ok
   */
  result?: 0 | 1 | undefined
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 評価内容を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  /** 追加評価項目の評価内容を json で記録します */
  additionalEvaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  comment?: string | undefined
  application: number
}

/** 評価総括記録 */
export type EvaluationSummaryRequest = {
  /** 評価責任者 */
  supervisor: UserRequest

  /**
   * 1: 可, 0: 保留
   * 
   * * `0` - Ng
   * * `1` - Ok
   */
  result?: 0 | 1 | undefined
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 評価内容を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  /** 追加評価項目の評価内容を json で記録します */
  additionalEvaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  comment?: string | undefined
  application: number
}

/** ラダー評価登録・更新 */
export type EvaluationWrite = {
  id: number
  /** 評価者ID */
  evaluator: number
  created: string | null
  modified: string | null
  /**
   * * `SELF` - 自己評価
   * * `COWORKER` - 同僚評価
   * * `HEAD` - 上長評価
   */
  evaluatorType: 'SELF' | 'COWORKER' | 'HEAD'
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 各評価項目の評価点を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  application: number
}

/** ラダー評価登録・更新 */
export type EvaluationWriteRequest = {
  /** 評価者ID */
  evaluator: number
  /**
   * * `SELF` - 自己評価
   * * `COWORKER` - 同僚評価
   * * `HEAD` - 上長評価
   */
  evaluatorType: 'SELF' | 'COWORKER' | 'HEAD'
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 各評価項目の評価点を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  application: number
}

/** 目標領域分類のヘッダーと項目 */
export type LadderDomain = {
  id: number
  classes: LadderDomainClass[]
  name: string
}

/** 目標領域分類項目 */
export type LadderDomainClass = {
  id: number
  depth: number
  queue: number
  title: string
  head: number
}

/** ラダーシート */
export type LadderSheet = {
  id: number
  domainHead: number
  targetList?: string[] | null | undefined
  level: number
  name: string

  /** 評価項目の点数の凡例を定義します */
  pointLegend?: {
    [key: string]: string | undefined
  } | null | undefined

  maxPoint: number
  startDate?: string | null | undefined
  endDate?: string | null | undefined
}

/** ラダーシート */
export type LadderSheetRequest = {
  domainHead: number
  targetList?: string[] | null | undefined
  level: number
  name: string

  /** 評価項目の点数の凡例を定義します */
  pointLegend?: {
    [key: string]: string | undefined
  } | null | undefined

  maxPoint: number
  startDate?: string | null | undefined
  endDate?: string | null | undefined
}

export type LoginRequest = {
  username?: string | undefined
  email?: string | undefined
  password: string
}

/** ログインレスポンス */
export type LoginResponse = {
  access: string
  refresh: string

  user: UserDetail

  /** アクセストークンの有効期限 */
  accessExpiration: string
  /** リフレッシュトークンの有効期限 */
  refreshExpiration: string
}

export type PaginatedEvaluationApplicationList = {
  count?: number | undefined
  next?: string | null | undefined
  previous?: string | null | undefined
  results?: EvaluationApplication[] | undefined
}

export type PaginatedEvaluationList = {
  count?: number | undefined
  next?: string | null | undefined
  previous?: string | null | undefined
  results?: Evaluation[] | undefined
}

export type PaginatedLadderDomainList = {
  count?: number | undefined
  next?: string | null | undefined
  previous?: string | null | undefined
  results?: LadderDomain[] | undefined
}

export type PaginatedLadderSheetList = {
  count?: number | undefined
  next?: string | null | undefined
  previous?: string | null | undefined
  results?: LadderSheet[] | undefined
}

export type PaginatedSearchApplicationList = {
  count?: number | undefined
  next?: string | null | undefined
  previous?: string | null | undefined
  results?: SearchApplication[] | undefined
}

export type PaginatedSummaryAdditionalEvaluationItemList = {
  count?: number | undefined
  next?: string | null | undefined
  previous?: string | null | undefined
  results?: SummaryAdditionalEvaluationItem[] | undefined
}

/** ラダー評価申請登録 */
export type PatchedEvaluationApplicationWriteRequest = {
  /** 申請者ユーザーID */
  user?: number | undefined
  /** ラダーシートID */
  sheet?: number | undefined
}

/** 評価総括記録 */
export type PatchedEvaluationSummaryRequest = {
  /** 評価責任者 */
  supervisor?: UserRequest | undefined

  /**
   * 1: 可, 0: 保留
   * 
   * * `0` - Ng
   * * `1` - Ok
   */
  result?: 0 | 1 | undefined
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 評価内容を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  /** 追加評価項目の評価内容を json で記録します */
  additionalEvaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  comment?: string | undefined
  application?: number | undefined
}

/** ラダー評価登録・更新 */
export type PatchedEvaluationWriteRequest = {
  /** 評価者ID */
  evaluator?: number | undefined
  /**
   * * `SELF` - 自己評価
   * * `COWORKER` - 同僚評価
   * * `HEAD` - 上長評価
   */
  evaluatorType?: 'SELF' | 'COWORKER' | 'HEAD' | undefined
  date?: string | null | undefined
  fixed?: boolean | undefined

  /** 各評価項目の評価点を json で記録します */
  evaluationPoints?: {
    [key: string]: string | undefined
  } | undefined

  application?: number | undefined
}

/** ラダーシート */
export type PatchedLadderSheetRequest = {
  domainHead?: number | undefined
  targetList?: string[] | null | undefined
  level?: number | undefined
  name?: string | undefined

  /** 評価項目の点数の凡例を定義します */
  pointLegend?: {
    [key: string]: string | undefined
  } | null | undefined

  maxPoint?: number | undefined
  startDate?: string | null | undefined
  endDate?: string | null | undefined
}

/** ユーザー情報。ユーザー本人及び上位権限者のみ参照できる情報です */
export type PatchedUserDetailRequest = {
  firstName?: string | undefined
  lastName?: string | undefined
  profileIcon?: (File | ReadStream) | null | undefined
}

export type RefreshTokenResponse = {
  /** 新しいトークンの有効期限 */
  accessExpiration: string
  /** 新しいリフレッシュトークンの有効期限 */
  refreshExpiration: string
}

/** ユーザー登録リクエスト */
export type RegisterUserRequest = {
  username: string
  lastName?: string | undefined
  firstName?: string | undefined
  password: string
}

export type RestAuthDetail = {
  detail: string
}

/** ラダー評価申請検索結果 */
export type SearchApplication = {
  /** 申請者 */
  user: User

  level: number
  /**
   * * `ONGOING` - 実施中
   * * `CANCELED` - キャンセル
   * * `FINISHED` - 評価済
   */
  status?: 'ONGOING' | 'CANCELED' | 'FINISHED' | undefined
  created: string | null
  /** 評価総括が記録されたときにその結果が反映されます。(1: 可, 0: 保留) */
  result: number | null
  evaluationSet: SearchEvaluation[]
  sheetName: string
}

export type SearchEvaluation = {
  /** 評価者 */
  evaluator: User

  /**
   * * `SELF` - 自己評価
   * * `COWORKER` - 同僚評価
   * * `HEAD` - 上長評価
   */
  evaluatorType: 'SELF' | 'COWORKER' | 'HEAD'
  date?: string | null | undefined
  fixed?: boolean | undefined
}

/** 評価総括記録に追加する評価項目 */
export type SummaryAdditionalEvaluationItem = {
  id: number
  text: string
  order?: number | undefined
}

/** ユーザー情報。ログインユーザー全体に公開できる情報です */
export type User = {
  id: number
  firstName?: string | undefined
  lastName?: string | undefined
  profileIcon?: string | null | undefined
}

/** ユーザー情報。ユーザー本人及び上位権限者のみ参照できる情報です */
export type UserDetail = {
  id: number
  /** この項目は必須です。半角アルファベット、半角数字、@/./+/-/_ で150文字以下にしてください。 */
  username: string
  firstName?: string | undefined
  lastName?: string | undefined
  profileIcon?: string | null | undefined
}

/** ユーザー情報。ユーザー本人及び上位権限者のみ参照できる情報です */
export type UserDetailRequest = {
  firstName?: string | undefined
  lastName?: string | undefined
  profileIcon?: (File | ReadStream) | null | undefined
}

/** ユーザー情報。ログインユーザー全体に公開できる情報です */
export type UserRequest = {
  firstName?: string | undefined
  lastName?: string | undefined
  profileIcon?: (File | ReadStream) | null | undefined
}
