[English](README.md) | [Español](README.es.md) | [Français](README.fr.md) | [한국어](README.ko.md) | [中文](README.zh.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Italiano](README.it.md)

# NuModeX Ext Maker

![License: BSL 1.1](https://img.shields.io/badge/License-BSL%201.1-blue.svg) ![Change License: Apache 2.0](https://img.shields.io/badge/Change%20License-Apache%202.0%20(2030)-green.svg) ![Chrome](https://img.shields.io/badge/Chrome-Supported-brightgreen?logo=googlechrome&logoColor=white) ![Edge](https://img.shields.io/badge/Edge-Supported-brightgreen?logo=microsoftedge&logoColor=white) ![Firefox](https://img.shields.io/badge/Firefox-Supported-brightgreen?logo=firefox&logoColor=white) ![Whale](https://img.shields.io/badge/Whale-Supported-brightgreen?logo=naver&logoColor=white) ![Opera](https://img.shields.io/badge/Opera-Supported-brightgreen?logo=opera&logoColor=white) ![Safari](https://img.shields.io/badge/Safari-Supported-brightgreen?logo=safari&logoColor=white) ![Languages](https://img.shields.io/badge/Languages-9-blueviolet)

AIでManifest V3ブラウザ拡張機能と静的ウェブサイトを構築。

SoraVantia合同会社によるManifest V3ブラウザ拡張機能・静的ウェブサイトビルダー。ログイン不要、サブスクリプション不要、バックエンド不要。クラウドAIプロバイダー、オンデバイスモデル、または独自のローカル・リモートAIサーバーを使用できます。

**ウェブサイト：** https://numodex.com/numodexextmaker

**Firefox Add-ons:** https://addons.mozilla.org/firefox/addon/numodex-ext-maker/

## 機能

- AI搭載のブラウザ拡張機能生成（Manifest V3）
- マルチプロバイダー対応。Google、OpenAI、またはAnthropicの自分のAPIキーを使用
- オンデバイスAIモデル。APIキー不要でブラウザ提供のAIを使用
- カスタムモデル対応。/v1/chat/completions APIをサポートする任意のローカルまたはリモートAIサーバーに接続
- 完全な会話履歴を持つ対話型チャットインターフェース
- テキストおよび画像プロンプト対応
- AI搭載の編集。個別ファイルの編集、新規ファイルの追加、または拡張機能全体の改善を1つのプロンプトで
- インラインエディターによる手動コード編集
- AI編集の元に戻す機能
- 変更の表示。統合ビューまたはサイドバイサイドビューで変更前後の差分を比較
- ライブプレビュー。サンドボックス化されたiframeで生成した拡張機能のビジュアルプレビューを表示
- ワンクリックでファイル内容をクリップボードにコピー
- 構文ハイライト付きコードビューアーとファイルツリーを内蔵
- ワンクリックで生成した拡張機能をZIPダウンロード
- 複数プロジェクト対応。プロジェクトの作成、名前変更、切り替え、削除
- 自動命名。生成した拡張機能のmanifestからプロジェクト名を自動設定
- プロジェクトの永続化。作業は自動保存され、再度開いた時に復元
- キーボードショートカット。Enterで送信、Shift+Enterで改行、Ctrl/Cmd+Enterで拡張機能をビルド、Ctrl/Cmd+Shift+Enterでウェブサイトをビルド
- システムダークモード検出。初回起動時にOS設定に自動的に合わせる
- 手動切り替え用のダークモードトグル
- マルチブラウザ対応。Chrome、Edge、Firefoxに対応
- 9言語：英語、日本語、スペイン語、フランス語、韓国語、中国語、ドイツ語、ポルトガル語、イタリア語
- ヘルプガイドとアプリ内利用規約を内蔵
- アカウント不要。完全にブラウザ内で動作
- AIで静的ウェブサイト（HTML/CSS/JS）を構築 - 同じチャットベースのワークフロー、異なる出力
- 個人および商用利用可能

![Extension Builder](assets/extension-builder/numodex-ext-maker-extension-builder-ja.png)

## データフロー

```mermaid
graph LR
    A[あなたのブラウザ] --> B[NuModeX Ext Maker]
    B --> C[ローカルストレージ<br/>IndexedDB + 拡張機能ストレージ]
    B --> D[サンドボックスプレビュー<br/>iframe]
    B --> E[クラウドAIプロバイダー<br/>あなたのAPIキー]
    B --> F[オンデバイスAI<br/>デバイス上で処理]
    B --> G[カスタムローカルサーバー<br/>設定済みエンドポイント]
    B --> H[カスタムリモートサーバー<br/>設定済みエンドポイント]

    style A fill:#6b7280,color:#fff,stroke:#4b5563
    style B fill:#f97316,color:#fff,stroke:#ea580c
    style C fill:#f97316,color:#fff,stroke:#ea580c
    style D fill:#f97316,color:#fff,stroke:#ea580c
    style E fill:#169cef,color:#fff,stroke:#1280c4
    style F fill:#f97316,color:#fff,stroke:#ea580c
    style G fill:#f97316,color:#fff,stroke:#ea580c
    style H fill:#169cef,color:#fff,stroke:#1280c4
```

> 🟠 オレンジ = デバイス内に留まる | 🔵 ブルー = APIキーを使用して送信 | SoraVantia合同会社はデータパスに含まれません。

## はじめに

1. 利用規約に同意（初回起動時）。
2. 設定でクラウドAIプロバイダーのAPIキーを入力。
3. モデルを選択し、構築したいものを説明して「拡張機能をビルド」または「ウェブサイトをビルド」をクリック。
4. 生成されたファイルをZIPでダウンロードし、ブラウザにロード。

詳細なセットアップ手順、オンデバイスAIの設定、トラブルシューティング、ヒントについては[スタートガイド](getting-started-ja-3-26-2026.md)をご覧ください。

## APIキー

この拡張機能を使用するには自分のAPIキーが必要です。クラウドプロバイダーから取得してください。APIキーはブラウザにローカル保存され、SoraVantia合同会社や第三者に送信されることはありません。

## 言語

英語、日本語、スペイン語、フランス語、韓国語、中国語、ドイツ語、ポルトガル語、イタリア語

## ライセンス

NuModeX Ext Makerはソースアベイラブルであり、Business Source License 1.1（BSL 1.1）の下でライセンスされています。ソースコードはプロジェクトリポジトリで公開されています。

**Business Source License 1.1** ソースコードはBSL 1.1の下で利用可能です。個人または社内業務目的で使用、改変、派生著作物の作成が可能です。2030年3月23日に、ライセンスは自動的にApache License, Version 2.0に変換されます。全文は[LICENSE](LICENSE)をご覧ください。

**追加使用許可** 本ライセンス対象著作物（またはその派生著作物）をブラウザ拡張機能マーケットプレイスに再配布することを含まない限り、本番使用が可能です。

### できること

- 個人または社内業務目的での拡張機能の使用
- リポジトリのクローンと拡張機能のビルドまたはサイドロード
- マーケットプレイス以外の用途でのソースコードの改変および派生著作物の作成
- ブラウザ拡張機能マーケットプレイス以外のチャネルでの配布
- ソースコードの研究、学習、参照
- ユーザーへの直接サイドロードまたはデプロイ（例：企業内デプロイ）
- Issuesを通じたバグ報告、機能リクエスト、提案の送信
- オリジナルプロジェクトへの貢献

### 許可が必要なこと

- Chrome Web Store、Firefox Add-ons、Edge Add-ons、Safari Extensions、Naver Whale Store、またはその他のブラウザ拡張機能マーケットプレイスへの公開

### 変更日

2030年3月23日に、ライセンス対象著作物は自動的にApache License, Version 2.0の下で利用可能になります。

マーケットプレイスライセンスまたはビジネスに関するお問い合わせ：numodex@soravantia.com

## 法的事項

NuModeX Ext Makerをインストールまたは使用することにより、[エンドユーザーライセンス契約](eula-ja-v2.5.md)および[プライバシーポリシー](privacy-policy-ja-v2.5.md)に同意したものとみなされます。
本プロジェクトは現時点でプルリクエストを受け付けていません。バグ報告や機能リクエストにはIssuesをご利用ください。これは将来変更される可能性があります。

## サードパーティに関する通知

NuModeX Ext Makerはサードパーティのサービスと統合しています。SoraVantia合同会社は、いかなるサードパーティAIプロバイダーとも提携、推薦、または公式な関係を有していません。すべての製品名、商標、および登録商標はそれぞれの所有者の財産です。本プロジェクトにおけるそれらの言及は識別目的のみです。SoraVantia合同会社はAIプロバイダーおよびモデルのサポートをいつでも追加、削除、または変更することができます。

## サードパーティライセンス

詳細は[THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES)をご覧ください。

## 著作権

Copyright 2026 SoraVantia合同会社. All rights reserved.
