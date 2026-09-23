import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('shows a random flavoring, lets a listed flavoring be selected, and returns to random', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    render(<App />)

    expect(screen.getByRole('heading', { name: 'あじきめ' })).toBeInTheDocument()
    expect(screen.queryByText('今日の味付け')).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '生姜焼き風' })).toBeInTheDocument()
    expect(screen.getByText('基本の調味料', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('しょうゆ')).toBeInTheDocument()
    expect(screen.getByText('豚肉')).toBeInTheDocument()
    expect(screen.getByText('食材に火を通してからたれを加え、ひと煮立ち。甘めが好きなら砂糖を足して。')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '別の味にする' })).toBeEnabled()

    fireEvent.click(screen.getByRole('button', { name: '味付け一覧' }))
    expect(screen.getByRole('heading', { name: '味付け一覧' })).toBeInTheDocument()
    expect(screen.getByText('16件')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(16)
    expect(screen.getByRole('button', { name: /みそ炒め風.*みそ・みりん・酒/ })).toBeEnabled()

    fireEvent.click(screen.getByRole('button', { name: /みそ炒め風.*みそ・みりん・酒/ }))
    expect(screen.getByRole('heading', { name: 'みそ炒め風' })).toBeInTheDocument()
    expect(screen.getByText('みそ')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ランダムに戻る' })).toBeEnabled()

    fireEvent.click(screen.getByRole('button', { name: 'ランダムに戻る' }))
    expect(screen.getByRole('heading', { name: '生姜焼き風' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '別の味にする' })).toBeEnabled()
    vi.restoreAllMocks()
  })
})
