import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('shows the home and list frames for the initial release', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'あじきめ' })).toBeInTheDocument()
    expect(screen.getByText('今日の味付け')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '味付け一覧' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '別の味にする' })).toBeDisabled()
  })
})
