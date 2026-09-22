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

  const redraw = () => {
    setToday((current) => pickFlavoring(flavorings, current?.name))
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>あじきめ</h1>
        <p className="intro">料理を決めずに、今日の味だけ決めよう。</p>
      </header>

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
                別の味にする <span aria-hidden="true">›</span>
              </button>
            </>
          ) : (
            <p className="placeholder-copy">味付けがまだ登録されていません。</p>
          )}
        </div>
      </section>
      <p className="amount-note">分量は目安です。食材の量に合わせて少なめから調整してください。</p>

      <section className="list-section" aria-labelledby="list-title">
        <div className="section-heading">
          <div>
            <span className="section-accent" aria-hidden="true" />
            <h2 id="list-title">味付け一覧</h2>
          </div>
          <span className="count">{flavorings.length}件</span>
        </div>
        <div className="empty-list">
          <span className="empty-icon" aria-hidden="true">✦</span>
          <div>
            <p>{flavorings.length}件の味付けを選べる一覧を準備しています。</p>
            <span>気になる味を見つけてみましょう</span>
          </div>
        </div>
      </section>

      <footer>手元の食材で、気軽に。</footer>
    </main>
  )
}
