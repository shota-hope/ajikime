export type Seasoning = {
  name: string
  label: string
}

export type SeasoningAmount = {
  name: string
  amount: string
}

export type Flavoring = {
  name: string
  label: string
  seasonings: SeasoningAmount[]
  optionalSeasonings: SeasoningAmount[]
  goodWith: string[]
  spicy: boolean
  comment: string
}
