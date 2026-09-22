import { describe, expect, it } from 'vitest'
import { flavorings, seasonings } from './index'

describe('seasoning master data', () => {
  it('has thirteen flavorings with unique English keys', () => {
    expect(flavorings).toHaveLength(13)
    expect(new Set(flavorings.map(({ name }) => name)).size).toBe(flavorings.length)
  })

  it('uses unique seasoning keys and only valid seasoning references', () => {
    const seasoningNames = new Set(seasonings.map(({ name }) => name))

    expect(seasoningNames.size).toBe(seasonings.length)

    for (const flavoring of flavorings) {
      expect(flavoring.name).toMatch(/^[a-z]+(?:-[a-z]+)*$/)
      expect(flavoring.label.trim()).not.toBe('')
      expect(flavoring.comment.trim()).not.toBe('')
      expect(flavoring.goodWith.length).toBeGreaterThan(0)
      expect(flavoring.seasonings.length).toBeGreaterThan(0)
      expect(typeof flavoring.spicy).toBe('boolean')
      const references = [...flavoring.seasonings, ...flavoring.optionalSeasonings]
      expect(new Set(references.map(({ name }) => name)).size).toBe(references.length)
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
