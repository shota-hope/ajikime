# あじきめ（仮）

料理を決めずに、今日の味付けだけ決めるスマートフォン優先のWebアプリ。

アプリを開くと味付けが1つ表示され、別の味への引き直しや、一覧からの選択ができます。食材は利用者が手元にあるものを使います。

公開中のアプリ: [あじきめ](https://ajikime.hope3.workers.dev/)

## 仕様と開発

- [プロダクト仕様・決定事項](docs/product.md)
- [開発の進め方](docs/development.md)

Vite + React + TypeScript で実装しています。現在、16件の味付けからランダムに1件を表示し、別の味へ引き直したり、一覧から選んだりできます。

## デプロイ

Cloudflare Workers Static Assets を使い、`workers.dev` に手動公開します。`main` の更新による自動デプロイは行いません。

初回は `npx wrangler login` で公開先の Cloudflare アカウントにログインします。公開前に `npm ci --ignore-scripts`、`npm audit --audit-level=high`、`npm test`、`npm run deploy:dry-run` を実行します。確認後、`npm run deploy` で公開します。公開先の Worker 名は `ajikime` です。認証情報をリポジトリに保存しないでください。
