# 開発の進め方

このリポジトリでは、[product.md](product.md) を仕様・決定事項の正本とし、小さなIssueとPRで変更の目的・経緯を残す。参考にした [yaritaikoto-yaro](https://github.com/shota-hope/yaritaikoto-yaro) と同じく、スマートフォンでの使いやすさを先に確認する。

## 基本方針

- 機能の追加・変更は、目的・対象・完了条件を短く書いたIssueに分ける。
- 新しい利用体験や範囲変更は、Issueと画面案などで利用者と確認してから実装する。好意的な感想だけを実装承認とは扱わない。
- `main` に直接実装せず、`codex/<topic>` 形式の作業ブランチからPRを作る。
- 承認されたIssueの範囲に絞り、未決の将来機能を先回りして追加しない。
- 既存の変更やデータを保持し、依頼と無関係な変更を含めない。

## UIを一緒に詰めるとき

スマートフォンの画面案を先に見せ、配置・文言・情報量・操作の流れを確認する。感想を受けて調整し、決まった部分と未決部分を [product.md](product.md) に記録する。画像中のサンプルデータは確定仕様にしない。実装後はブラウザのスマートフォン幅で表示と操作を再確認する。

## IssueからPRまで

1. Issueの目的、対象、完了条件を利用者と確認する。
2. `codex/<topic>` ブランチを作り、そのIssueだけを実装する。
3. 仕様が決まった・変わった場合は、同じ変更で `docs/product.md` の本文と決定履歴を更新する。開発手順を変える場合は本書を更新する。
4. コードを変更した場合はテストと本番ビルドを実行する。UIを変更した場合は、スマートフォン幅で主要操作をブラウザ確認する。
5. 小さなPRを作り、本文に変更点、検証結果、残る課題、`Closes #番号` を記す。
6. 利用者のレビューを受ける。明示的な承認前にPRをマージしたり、デプロイしたりしない。

テスト・ビルドの具体的なコマンドとCIは、アプリの開発基盤を作る [Issue #2](https://github.com/shota-hope/ajikime/issues/2) で定める。現時点では、検証や自動公開が設定済みであるとは扱わない。

## 最初の実装順

1. [仕様と開発手順](https://github.com/shota-hope/ajikime/issues/1)
2. [スマートフォン優先の開発基盤](https://github.com/shota-hope/ajikime/issues/2)
3. [味付けデータ10件](https://github.com/shota-hope/ajikime/issues/3)
4. [起動時のランダム表示と引き直し](https://github.com/shota-hope/ajikime/issues/4)
5. [味付け一覧から選択](https://github.com/shota-hope/ajikime/issues/5)
