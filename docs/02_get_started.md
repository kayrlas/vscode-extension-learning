# GET STARTED
- `F5`でコンパイル，Extension Development Hostウィンドウが開く
- 変更後は`Ctrl+Shift+P`から`Reload Window`
- ブレークポイントの設定，カーソル合わせ・デバッグビュー・デバッグコンソールから変数の値を評価
- `Hello World`拡張の構成
  1. `onCommand` **Activation Event**: `Hello World`コマンド実行時に拡張を有効にする（有効化のイベント）
  ```
    "activationEvents": [
		"onCommand:extension.helloWorld"
	]
  ```
  2. `contributes.commands` **Contribution Point**: `Hello World`コマンドをコマンドパレット上で有効にする．コマンドIDを割り当てる．（静的宣言）
  ```
    "contributes": {
		"commands": [
			{
				"command": "extension.helloWorld",
				"title": "Hello World"
			}
		]
	}
  ```
  3. `commands.registerCommand` **VS Code API**: 関数に登録済みのコマンドIDを割り当て（JavaScript API）
  ```
    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		const message = 'Hello VS Code!';
		vscode.window.showInformationMessage(message);
	});
	context.subscriptions.push(disposable);
  ```
- ファイル構造
  ```
  .
  ├── .vscode
  │   ├── launch.json     // 起動・デバッグ設定
  │   └── tasks.json      // TypeScriptビルド設定
  ├── .gitignore          // 出力・node_modules除外
  ├── README.md           // 拡張の説明
  ├── src
  │   └── extension.ts    // 拡張のソースコード
  ├── package.json        // 拡張マニフェスト
  ├── tsconfig.json       // TypeScript設定
  ```
- `package.json`は必須ファイル: Node.jsとVS Codeオリジナルのフィールド
- 拡張エントリファイルの2つの関数: `activate`（**Activation Event**発生時に実行） `deactivate`（拡張無効化時の初期化）
