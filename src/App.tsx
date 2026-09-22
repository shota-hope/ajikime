import { flavorings } from './data'

export function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand-row">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <p className="eyebrow">今日のごはんに</p>
        </div>
        <h1>あじきめ</h1>
        <p className="intro">料理を決めずに、今日の味だけ決めよう。</p>
      </header>

      <section className="hero-card" aria-labelledby="today-title">
        <span className="hero-accent" aria-hidden="true" />
        <div className="hero-card__content">
          <div className="card-label">今日の味付け</div>
          <h2 id="today-title">ここに味付けが表示されます</h2>
          <p className="placeholder-copy">
            {flavorings.length}件の味付けを用意しました。おすすめ表示は次の更新で追加します。
          </p>
          <button type="button" className="primary-button" disabled>
            別の味にする <span aria-hidden="true">›</span>
          </button>
        </div>
      </section>

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
