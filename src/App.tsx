import { flavorings } from './data'

export function App() {
  return (
    <main className="app-shell">
      <div className="ambient-glow ambient-glow--top" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--bottom" aria-hidden="true" />

      <header className="app-header">
        <div className="brand-row">
          <span className="brand-mark" aria-hidden="true">味</span>
          <p className="eyebrow">今日のごはんに</p>
        </div>
        <h1 aria-label="あじきめ"><span>あじ</span>きめ</h1>
        <p className="intro">料理を決めずに、今日の味だけ決めよう。</p>
      </header>

      <section className="hero-card" aria-labelledby="today-title">
        <div className="hero-card__halo" aria-hidden="true" />
        <div className="hero-card__content">
          <div className="card-label"><span />今日の味付け</div>
          <h2 id="today-title">ここに味付けが<br />表示されます</h2>
          <p className="placeholder-copy">
            {flavorings.length}件の味付けを用意しました。おすすめ表示は次の更新で追加します。
          </p>
          <button type="button" className="primary-button" disabled>
            <span aria-hidden="true">↻</span> 別の味にする
          </button>
        </div>
        <div className="flavor-orb" aria-hidden="true">
          <span className="flavor-orb__ring flavor-orb__ring--outer" />
          <span className="flavor-orb__ring flavor-orb__ring--inner" />
          <span className="flavor-orb__core" />
          <span className="flavor-orb__spark flavor-orb__spark--one" />
          <span className="flavor-orb__spark flavor-orb__spark--two" />
        </div>
      </section>

      <section className="list-section" aria-labelledby="list-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">FLAVOR LIBRARY</p>
            <h2 id="list-title">味付け一覧</h2>
          </div>
          <span className="count">{flavorings.length}件</span>
        </div>
        <div className="empty-list">
          <span className="empty-icon" aria-hidden="true">✦</span>
          <div>
            <p>味付けを選べる一覧を準備しています。</p>
            <span>{flavorings.length}種類の味のアイデアを収録</span>
          </div>
        </div>
      </section>

      <footer><span aria-hidden="true">✦</span> 手元の食材で、気軽に。</footer>
    </main>
  )
}
