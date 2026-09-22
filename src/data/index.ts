import flavoringsData from './flavorings.json'
import seasoningsData from './seasonings.json'
import type { Flavoring, Seasoning } from './types'

export const flavorings: Flavoring[] = flavoringsData
export const seasonings: Seasoning[] = seasoningsData

export type { Flavoring, Seasoning, SeasoningAmount } from './types'
