from django.contrib import admin

from .models import (
    Evaluation,
    EvaluationApplication,
    EvaluationSummary,
    SummaryAdditionalEvaluationItem,
)

admin.site.register(Evaluation)
admin.site.register(EvaluationApplication)
admin.site.register(SummaryAdditionalEvaluationItem)
admin.site.register(EvaluationSummary)
