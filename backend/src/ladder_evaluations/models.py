from django.db import models
from django_lifecycle import BEFORE_CREATE, LifecycleModel, hook

from accounts.models import User
from ladder.models import LadderSheet
from lib.models import TimeStampedModel


class ResultType(models.IntegerChoices):
    """評価結果区分"""

    NG = 0
    OK = 1


class EvaluationApplication(LifecycleModel, TimeStampedModel):
    """
    ラダー評価申請

    Notes:
        評価対象者は、評価を受ける前に必ず評価申請をだします。
    """

    user = models.ForeignKey(User, on_delete=models.PROTECT, verbose_name="申請ユーザー")
    sheet = models.ForeignKey(LadderSheet, on_delete=models.PROTECT, verbose_name="ラダーシート")
    level = models.IntegerField("レベル", editable=False)

    # TODO: 申請時部署を記録する

    class EvaluationStatus(models.TextChoices):
        """評価状況"""

        ONGOING = "ONGOING", "実施中"
        CANCELED = "CANCELED", "キャンセル"
        FINISHED = "FINISHED", "評価済"

    status = models.CharField(
        max_length=15, choices=EvaluationStatus.choices, default=EvaluationStatus.ONGOING, verbose_name="評価状況"
    )

    result = models.IntegerField(
        "評価結果",
        default=None,
        null=True,
        choices=ResultType.choices,
        editable=False,
        help_text="評価総括が記録されたときにその結果が反映されます。(1: 可, 0: 保留)",
    )

    @hook(BEFORE_CREATE)
    def _set_level_on_create(self):
        if self.level is not None:
            return
        sheet = self.sheet if self.sheet else LadderSheet.objects.filter(id=self.sheet_id).first()
        self.level = sheet.level


def _evaluation_points_default_value():
    return dict()


class Evaluation(TimeStampedModel):
    """ラダー評価"""

    application = models.ForeignKey(EvaluationApplication, on_delete=models.CASCADE)
    evaluator = models.ForeignKey(User, on_delete=models.PROTECT, verbose_name="評価者")

    class EvaluatorType(models.TextChoices):
        """評価者区分"""

        SELF = "SELF", "自己評価"
        COWORKER = "COWORKER", "同僚評価"
        HEAD = "HEAD", "上長評価"

    evaluator_type = models.CharField(max_length=15, choices=EvaluatorType.choices, verbose_name="評価者区分")
    date = models.DateField("評価日", null=True, blank=True, default=None)
    fixed = models.BooleanField("確定済みフラグ", default=False)
    evaluation_points = models.JSONField(
        "評価点情報", default=_evaluation_points_default_value, help_text="各評価項目の評価点を json で記録します"
    )


class EvaluationSummary(TimeStampedModel):
    """評価総括記録"""

    application = models.OneToOneField(EvaluationApplication, on_delete=models.PROTECT, verbose_name="評価申請")
    supervisor = models.ForeignKey(User, on_delete=models.PROTECT, verbose_name="評価責任者")

    result = models.IntegerField(
        "評価結果",
        default=0,
        choices=ResultType.choices,
        help_text="1: 可, 0: 保留",
    )

    date = models.DateField("総括評価日", null=True, blank=True, default=None)
    fixed = models.BooleanField("確定済みフラグ", default=False)
    evaluation_points = models.JSONField(
        "評価内容", default=_evaluation_points_default_value, blank=True, help_text="評価内容を json で記録します"
    )
    additional_evaluation_points = models.JSONField(
        "追加評価項目の評価内容", blank=True, default=_evaluation_points_default_value, help_text="追加評価項目の評価内容を json で記録します"
    )

    comment = models.TextField("コメント", default="", blank=True)


class SummaryAdditionalEvaluationItem(models.Model):
    """
    評価総括記録に追加する評価項目
    例: レベル認定課題、評価会の評価等
    目標領域分類とこのアイテムが評価総括記録に表示する評価項目になります
    """

    text = models.CharField(max_length=200)
    order = models.IntegerField("ソート順", default=100000)

    class Meta:
        ordering = ["order"]
