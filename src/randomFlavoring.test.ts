import { describe, expect, it } from 'vitest'
import type { Flavoring } from './data'
import { pickFlavoring } from './randomFlavoring'

const flavorings = [
  { name: 'a' },
  { name: 'b' },
  { name: 'c' },
] as Flavoring[]

describe('pickFlavoring', () => {
  it('returns undefined for no candidates', () => {
    expect(pickFlavoring([])).toBeUndefined()
  })

  it('returns the only candidate', () => {
    expect(pickFlavoring([flavorings[0]], 'a')).toBe(flavorings[0])
  })

  it('does not return the immediately previous flavoring when choices remain', () => {
    expect(pickFlavoring(flavorings, 'a', () => 0)).toBe(flavorings[1])
    expect(pickFlavoring(flavorings, 'b', () => 0.99)).toBe(flavorings[2])
  })
})
