import { useState } from 'react'
import { flavorings, seasonings } from './data'
import type { Flavoring } from './data'
import { pickFlavoring } from './randomFlavoring'

const seasoningLabels = new Map(seasonings.map(({ name, label }) => [name, label]))

function SeasoningList({ items }: { items: Flavoring['seasonings'] }) {
  return (
    <dl className="seasoning-list">
      {items.map(({ name, amount }) => (
        <div key={name}>
          <dt>{seasoningLabels.get(name) ?? name}</dt>
          <dd>{amount}</dd>
        </div>
      ))}
    </dl>
  )
}

export function App() {
  const [today, setToday] = useState(() => pickFlavoring(flavorings))
  const [view, setView] = useState<'home' | 'list'>('home')
  const [selectedFromList, setSelectedFromList] = useState(false)

  const redraw = () => {
    setToday((current) => pickFlavoring(flavorings, current?.name))
    setSelectedFromList(false)
  }

  const selectFlavoring = (flavoring: Flavoring) => {
    setToday(flavoring)
    setSelectedFromList(true)
    setView('home')
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>あじきめ</h1>
        <p className="intro">料理を決めずに、今日の味だけ決めよう。</p>
      </header>

      <nav className="view-switcher" aria-label="画面切り替え">
        <button type="button" aria-pressed={view === 'home'} onClick={() => setView('home')}>今日の味</button>
        <button type="button" aria-pressed={view === 'list'} onClick={() => setView('list')}>味付け一覧</button>
      </nav>

      {view === 'home' ? <>
      <section className="hero-card" aria-labelledby="today-title">
        <div className="hero-card__content">
          {today ? (
            <>
              <h2 id="today-title">{today.label}</h2>
              <div className="flavoring-detail">
                <h3>基本の調味料 <span>（2人分くらい）</span></h3>
                <SeasoningList items={today.seasonings} />
              </div>
              {today.optionalSeasonings.length > 0 && (
                <div className="flavoring-detail">
                  <h3>あれば</h3>
                  <SeasoningList items={today.optionalSeasonings} />
                </div>
              )}
              <div className="flavoring-detail">
                <h3>合う食材</h3>
                <ul className="good-with">
                  {today.goodWith.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                </ul>
              </div>
              <p className="flavoring-comment">{today.comment}</p>
              <button type="button" className="primary-button" onClick={redraw}>
                {selectedFromList ? 'ランダムに戻る' : '別の味にする'} <span aria-hidden="true">›</span>
              </button>
            </>
          ) : (
            <p className="placeholder-copy">味付けがまだ登録されていません。</p>
          )}
        </div>
      </section>
      <p className="amount-note">分量は目安です。食材の量に合わせて少なめから調整してください。</p>
      </> : (
      <section className="list-section" aria-labelledby="list-title">
        <div className="section-heading">
          <div>
            <span className="section-accent" aria-hidden="true" />
            <h2 id="list-title">味付け一覧</h2>
          </div>
          <span className="count">{flavorings.length}件</span>
        </div>
        {flavorings.length > 0 ? (
          <ul className="flavoring-list">
            {flavorings.map((flavoring) => (
              <li key={flavoring.name}>
                <button type="button" onClick={() => selectFlavoring(flavoring)}>
                  <span className="flavoring-list__content">
                    <span className="flavoring-list__name">{flavoring.label}</span>
                    <span className="flavoring-list__seasonings">{flavoring.seasonings.map(({ name }) => seasoningLabels.get(name) ?? name).join('・')}</span>
                  </span>
                  <span className="flavoring-list__arrow" aria-hidden="true">›</span>
                </button>
              </li>
            ))}
          </ul>
        ) : <p className="placeholder-copy">味付けがまだ登録されていません。</p>}
      </section>
      )}

      <footer>手元の食材で、気軽に。</footer>
    </main>
  )
}
