from django.db import models


class TimeStampedModel(models.Model):
    """like django-model-utils TimeStampedModel"""

    created = models.DateTimeField("作成日時", auto_now_add=True, blank=True, null=True)
    modified = models.DateTimeField("更新日時", auto_now=True, blank=True, null=True)

    class Meta:
        abstract = True
