import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('loads one flavoring with its details and enables a redraw', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    render(<App />)

    expect(screen.getByRole('heading', { name: 'あじきめ' })).toBeInTheDocument()
    expect(screen.queryByText('今日の味付け')).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '生姜焼き風' })).toBeInTheDocument()
    expect(screen.getByText('基本の調味料', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('しょうゆ')).toBeInTheDocument()
    expect(screen.getByText('豚肉')).toBeInTheDocument()
    expect(screen.getByText('食材に火を通してからたれを加え、ひと煮立ち。甘めが好きなら砂糖を足して。')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '味付け一覧' })).toBeInTheDocument()
    expect(screen.getAllByText('13件').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: '別の味にする' })).toBeEnabled()
    expect(screen.queryByText('今日のごはんに')).not.toBeInTheDocument()
    vi.restoreAllMocks()
  })
})
