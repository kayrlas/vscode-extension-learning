# WORKING WITH EXTENSIONS
- 拡張の統合テストには**Extension Development Host**と呼ばれる特別なVS Codeインスタンスを使用する
- 既に生成された拡張のテストには`npm run test`か`yarn test`が使える
- **test script** (`src/test/runTest.ts`): `vscode-test` APIを用いたテストを簡略化するスクリプト
- **test runner script** (`src/test/suite/index.ts`): `--extensionTestsPath`が指すスクリプトで，Mocha等のフレームワークを用いたテストが可能
- `launch.json`でテストのデバッグが可能
- デバッグ中に他の拡張を無効にする
  1. `launch.json`の`args`属性に`--disable-extensions`を加える
  2. `vscode-test`の`runTests` APIに`launchArgs: ['--disable-extensions']`を加える
  - 上記を変更しただけでは無効にならなかった．現状は手動で無効化しておくしかない．
- `vscode-test`を変更することで`code --install-extension`をテスト時に実行するような調整が可能
- vscodeからvscode-testに移行するには，package.jsonを変更，test script，test runner scriptを追加することで可能
