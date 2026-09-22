import { describe, expect, it } from 'vitest'
import { flavorings, seasonings } from './index'

describe('seasoning master data', () => {
  it('has ten flavorings with unique English keys', () => {
    expect(flavorings).toHaveLength(10)
    expect(new Set(flavorings.map(({ name }) => name)).size).toBe(flavorings.length)
  })

  it('uses unique seasoning keys and only valid seasoning references', () => {
    const seasoningNames = new Set(seasonings.map(({ name }) => name))

    expect(seasoningNames.size).toBe(seasonings.length)

    for (const flavoring of flavorings) {
      for (const seasoning of [
        ...flavoring.seasonings,
        ...flavoring.optionalSeasonings,
      ]) {
        expect(seasoningNames).toContain(seasoning.name)
        expect(seasoning.amount.trim()).not.toBe('')
      }
    }
  })
})
