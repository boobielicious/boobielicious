import { mergeWith } from 'lodash'

export enum CupSize {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
  P = 'P',
  Q = 'Q',
  R = 'R',
  S = 'S',
  T = 'T',
  U = 'U',
  V = 'V',
  W = 'W',
  X = 'X',
  Y = 'Y',
  Z = 'Z'
}

type CupSizes = Record<string, CupSize | undefined>

const cups: CupSizes = {
  AA: CupSize.B,
  BB: CupSize.C,
  CC: CupSize.D,
  DD: CupSize.E,
  DDD: CupSize.F,
  EE: CupSize.F,
  EEE: CupSize.G,
  FF: CupSize.G,
  FFF: CupSize.H,
  GG: CupSize.H,
  GGG: CupSize.I,
  HH: CupSize.I,
  HHH: CupSize.J,
  II: CupSize.J,
  III: CupSize.K,
  JJ: CupSize.K,
  JJJ: CupSize.L,
  KK: CupSize.L,
  KKK: CupSize.M,
  LL: CupSize.M,
  LLL: CupSize.N,
  MM: CupSize.N,
  MMM: CupSize.O,
  NN: CupSize.O,
  NNN: CupSize.P,
  OO: CupSize.P,
  OOO: CupSize.Q,
  PP: CupSize.Q,
  PPP: CupSize.R,
  QQ: CupSize.R,
  QQQ: CupSize.S,
  RR: CupSize.S,
  RRR: CupSize.T,
  SS: CupSize.T,
  SSS: CupSize.U,
  TT: CupSize.U,
  TTT: CupSize.V,
  UU: CupSize.V,
  UUU: CupSize.W,
  VV: CupSize.W,
  VVV: CupSize.X,
  WW: CupSize.X,
  WWW: CupSize.Y,
  XX: CupSize.Y,
  XXX: CupSize.Z,
  YY: CupSize.Z,
  YYY: CupSize.Z,
  ZZ: CupSize.Z,
  ZZZ: CupSize.Z
}

export interface Performer {
  name: string
  photo?: string
  images: string[]
  aliases: string[]
  birthday?: Date
  bandSize?: number
  cupSize?: CupSize
  hasNaturalBoobs?: boolean
  boobpedia?: string
  freeOnes?: string
  twitter?: string
  instagram?: string
  stashId?: string
  isFavorite?: boolean
}

export const convertBandSize = (bandSize: number): number | undefined => {
  if (bandSize >= 28 && bandSize <= 46 && bandSize % 2 === 0) return 70 + (bandSize - 32) * 2.5
  if (bandSize % 5 === 0) return bandSize
  return undefined
}

export const convertCupSize = (cupSize: string): CupSize | undefined =>
  cups[cupSize] == null ? (cupSize as CupSize) : cups[cupSize]

export const isPerformerEqual = (a: Performer, b: Performer): boolean =>
  (a.twitter != null &&
    b.twitter != null &&
    a.twitter.length > 0 &&
    b.twitter.length > 0 &&
    a.twitter.toLowerCase() === b.twitter.toLowerCase()) ||
  (a.instagram != null &&
    b.instagram != null &&
    a.instagram.length > 0 &&
    b.instagram.length > 0 &&
    a.instagram.toLowerCase() === b.instagram.toLowerCase()) ||
  a.name.toLowerCase() === b.name.toLowerCase()

export const mergePerformers = (initalPerformer: Performer, priorityPerformer: Performer): Performer =>
  mergeWith(initalPerformer, priorityPerformer, (objValue, srcValue, key) => {
    if (['images', 'aliases'].includes(key)) return [...new Set([...objValue, ...srcValue])]
    return srcValue == null ? objValue : srcValue
  })
