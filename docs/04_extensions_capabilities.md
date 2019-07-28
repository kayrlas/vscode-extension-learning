# EXTENSIONS CAPABILITIES
- 共通機能
  - コマンド
    - コマンドパレットから実行，コマンドにキーバインド，右クリックからの呼び出し
    - `vscode.commands` API: コマンドを登録
    - `contributes.commands` Contribution Point: コマンドパレットから実行可能化
  - 構成
    - `contributes.configuration` Contribution Point: 拡張を構成
    - `workspace.getConfiguration` API: 呼び出し
  - キーバインド
    - `contributes.keybindings`: 設定
  - コンテキストメニュー
    - `contributes.menus` Contribution Point: 右クリックメニューに項目を追加
  - ワークスペース・グローバルデータの保存
    - `ExtensionContext.workspaceState`: ワークスペースのkey/valueを保存
    - `ExtensionContext.globalState`: 拡張機能有効時のkey/valueを保存
    - `ExtensionContext.storagePath`: ワークスペース固有のストレージパス
    - `ExtensionContext.globalStoragePath`: 拡張機能有効時のストレージパス
  - 通知の表示
    - `window.showInformationMessage`
    - `window.showWarningMessage`
    - `window.showErrorMessage`
  - Quick Pickを使用したユーザ入力
    - `vscode.QuickPick` API
  - File Picker
    - `vscode.window.showOpenDialog` API
    - system file pickerを開く，ファイルとフォルダを選択
  - Output Channel
    - `window.createOutputChannel` API: ログに使用
  - Progress API
    - `vscode.Progress` API: プログレスバーの表示
- テーマ
  - ソースコードの色
  - UIのの色
  - TextMateテーマの移植
  - カスタムファイルアイコン -> [![Kuin contribution point](https://img.shields.io/badge/contribution%20point-kuin-pink.svg)](http://kuina.ch/kuin)
- 宣言型言語機能
  - 括弧のマッチング
  - 自動インデント
  - 構文の強調表示
- プログラミング言語機能(`vscode.languages.*` API)
  - ホバー
  - 定義へ移動
  - 診断・エラー
  - IntelliSense
- ワークベンチ拡張
  - ファイルエクスプローラに新規の右クリックアクションを追加
  - Title Bar
  - Activity Bar(View Container): `contributes.viewsContainers`
  - Side Bar(Tree View): `contributes.views` -> [![Kuin contribution point](https://img.shields.io/badge/contribution%20point-kuin-pink.svg)](http://kuina.ch/kuin)
  - Panel
  - Editor Group(Webview)
  - Status Bar(Status Bar Item): `StatusBarItem` テキスト・アイコンの表示，クリックコマンド実行 -> [![Kuin contribution point](https://img.shields.io/badge/contribution%20point-kuin-pink.svg)](http://kuina.ch/kuin)
- デバッグ(`Debug Extension` API)
- UIのDOMにアクセスすることはできない