import type { Flavoring } from './data'

export function pickFlavoring(
  candidates: Flavoring[],
  previousName?: string,
  random: () => number = Math.random,
): Flavoring | undefined {
  if (candidates.length === 0) return undefined
  if (candidates.length === 1) return candidates[0]

  const selectable = candidates.filter(({ name }) => name !== previousName)
  return selectable[Math.floor(random() * selectable.length)]
}
