from django.db import models


class Department(models.Model):
    """部署"""

    name = models.CharField("名称", max_length=100)
    order = models.IntegerField("順序", default=100000)

    class Meta:
        ordering = ["order"]
