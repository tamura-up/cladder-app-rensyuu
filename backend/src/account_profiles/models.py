from django.db import models

from accounts.models import User
from facilities.models import Department
from lib.context.date_util import DjangoDateUtil
from lib.models import TimeStampedModel


# Create your models here.
class LadderHistory(TimeStampedModel):
    """ラダー履歴"""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    level = models.IntegerField("レベル")
    start_date = models.DateField("認定期間開始日")
    end_date = models.DateField(
        "認定期間終了日", default=DjangoDateUtil.INF_DATE, help_text=f"{DjangoDateUtil.INF_DATE} は終了日が未設定を表します"
    )


class DepartmentHistory(TimeStampedModel):
    """所属部署履歴"""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.PROTECT, verbose_name="所属部署")
    start_date = models.DateField("所属開始日")
    end_date = models.DateField(
        "所属終了日", default=DjangoDateUtil.INF_DATE, help_text=f"{DjangoDateUtil.INF_DATE} は終了日が未設定を表します"
    )
