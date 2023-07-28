## request_dataclass_gen

DRF のリクエスト (POST, PUT, PATCH) のフィールド情報をもつ dataclass を作成します。
(正確にはリクエストに使用される Serializer の情報から dataclass を作成)

## 使い方

`request_dataclass_gen` に app名 を指定し、その app の dataclass モジュールを作成します。

```sh
manage.py request_dataclass_gen <app名>
```

実行後、`<app>/request_dataclasses_base.py` にモジュールが作成されます。

実行の度に上書きされるので注意してください。

## required

+ drf-spectacular