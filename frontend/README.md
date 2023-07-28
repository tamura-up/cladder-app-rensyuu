## requirements

+ node: `v18.17.0`

## api の型定義の生成

aspida の設定は `aspida.config.js` に記載。
スキーマの URL は `http://localhost:8000/api/schema/` でハードコーディング。 **TODO: env で指定できるか？**

型定義は以下のコマンドで出力する

```
yarn codegen
```
