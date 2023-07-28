import json
from typing import Optional

from django.core import validators
from django.core.exceptions import ValidationError
from django.db import models
from fertile_forest_model.models import FFMNode


class LadderDomainHead(models.Model):
    """目標領域分類のヘッダー"""

    name = models.CharField("目標領域分類ヘッダー名称", max_length=200)


class LadderDomainClass(FFMNode):
    """
    目標領域分類。階層構造をもちます

    Notes:
        基本的にレベル 0 の大分類項目は最初に決めたら変更されないはず

    """

    head = models.ForeignKey(
        LadderDomainHead, on_delete=models.CASCADE, verbose_name="目標領域分類ヘッダー", related_name="classes"
    )
    title = models.CharField("目標領域分類名", max_length=200)


def validate_target_list_format(value: dict):
    """
    目標リストのフォーマット validation

    以下のようなフォーマットを想定しています
    ```
    {"targets": ["目標1", "目標2"]}
    ```
    """
    if "targets" not in value or not isinstance(value["targets"], list):
        raise ValidationError("目標リストのフォーマットが不正です")

    for s in value["targets"]:
        if not isinstance(s, str):
            raise ValidationError("目標リストは文字列で指定してください")

    return True


def validate_point_legend_format(value: Optional[dict]):
    """
    点数の凡例フォーマット validation

    以下のようなフォーマットを想定しています
    ```
    {"1": "test", "2": "spam"}
    ```
    """
    if not value:
        return False
    for k, v in value.items():
        if not isinstance(k, str) or not isinstance(v, str):
            raise ValidationError("凡例のフォーマットが不正です")

    return True


class LadderSheet(models.Model):
    """ラダーシート"""

    level = models.IntegerField()
    name = models.CharField("名称", max_length=200)
    targets = models.JSONField("目標リスト", validators=[validate_target_list_format], help_text="ラダーの設定目標リストを json で定義します")
    domain_head = models.ForeignKey(
        LadderDomainHead, on_delete=models.PROTECT, related_name="+", verbose_name="目標領域分類ヘッダー"
    )
    point_legend = models.JSONField(
        "点数の凡例",
        null=True,
        blank=True,
        validators=[validate_point_legend_format],
        help_text="評価項目の点数の凡例を定義します",
    )
    max_point = models.IntegerField("評価点数の最大値", validators=[validators.MinValueValidator(1)])

    start_date = models.DateField("運用開始日", null=True, blank=True)
    end_date = models.DateField("運用終了日", null=True, blank=True)

    def __str__(self):
        return "{0.id} - {0.name}(level:{0.level})".format(self)

    @property
    def target_list(self) -> [str]:
        if not self.targets:
            return []
        if isinstance(self.targets, dict):
            return [s for s in self.targets["targets"]]
        elif isinstance(self.targets, str):
            j = json.loads(self.targets)
            return [s for s in j["targets"]]
        return []

    @target_list.setter
    def target_list(self, value: list[str]):
        self.targets = dict(targets=value)


class LadderCriterion(models.Model):
    """評価基準項目"""

    sheet = models.ForeignKey(
        LadderSheet, on_delete=models.CASCADE, verbose_name="ラダーシート", related_name="criterion_set"
    )
    target_item = models.ForeignKey(
        LadderDomainClass,
        on_delete=models.PROTECT,
        verbose_name="目標領域分類",
        related_name="+",
        help_text="項目がどの領域分類に属するかを表します",
    )

    text = models.CharField("評価基準項目文", max_length=200)
