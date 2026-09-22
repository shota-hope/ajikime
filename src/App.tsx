import { flavorings } from './data'

export function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">今日のごはんに</p>
        <h1>あじきめ</h1>
        <p className="intro">料理を決めずに、今日の味だけ決めよう。</p>
      </header>

      <section className="hero-card" aria-labelledby="today-title">
        <div className="card-label">今日の味付け</div>
        <h2 id="today-title">ここに味付けが表示されます</h2>
        <p className="placeholder-copy">
          {flavorings.length}件の味付けを用意しました。おすすめ表示は次の更新で追加します。
        </p>
        <button type="button" className="primary-button" disabled>
          別の味にする
        </button>
      </section>

      <section className="list-section" aria-labelledby="list-title">
        <div className="section-heading">
          <h2 id="list-title">味付け一覧</h2>
          <span className="count">{flavorings.length}件</span>
        </div>
        <div className="empty-list">
          <span className="empty-icon" aria-hidden="true">✦</span>
          <p>{flavorings.length}件の味付けを選べる一覧を準備しています。</p>
        </div>
      </section>

      <footer>手元の食材で、気軽に。</footer>
    </main>
  )
}
