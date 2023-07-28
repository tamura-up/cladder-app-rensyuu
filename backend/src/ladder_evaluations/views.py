from django.db.models import Prefetch, QuerySet
from django.http import Http404
from django_filters import NumberFilter, OrderingFilter
from django_filters.rest_framework import FilterSet
from rest_framework.generics import ListAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet

from ladder_evaluations.models import (
    Evaluation,
    EvaluationApplication,
    EvaluationSummary,
    SummaryAdditionalEvaluationItem,
)
from ladder_evaluations.serializers import (
    EvaluationApplicationSerializer,
    EvaluationApplicationWriteSerializer,
    EvaluationSerializer,
    EvaluationSummarySerializer,
    EvaluationWriteSerializer,
    SearchApplicationSerializer,
    SummaryAdditionalEvaluationItemSerializer,
)
from lib.views import CreateModelMixin, ModelViewSet, PartialUpdateModelMixin


class EvaluationApplicationViewSet(ModelViewSet):
    """
    ラダー評価申請。
    ラダー評価の前には必ず申請が必要です。
    """

    queryset = EvaluationApplication.objects.select_related("user", "sheet")

    serializer_class = EvaluationApplicationSerializer

    def get_serializer_class(self):
        try:
            if self.action in ["create", "partial_update"]:
                return EvaluationApplicationWriteSerializer
        except:  # noqa
            pass
        return super().get_serializer_class()


class SearchApplicationFilterSet(FilterSet):
    """評価申請検索用 filter"""

    ordering = OrderingFilter(fields=["level", "status", "created"])
    evaluator = NumberFilter(method="filter_evaluator", label="評価者")

    class Meta:
        model = EvaluationApplication
        fields = {
            "user": ["in"],
            "level": ["in"],
            "status": ["in"],
            "created": ["lte", "gte"],
        }

    def filter_evaluator(self, queryset: QuerySet, name, value):
        app_ids = Evaluation.objects.filter(evaluator_id=value).values_list("application_id")
        return queryset.filter(id__in=app_ids)


from django_filters import rest_framework as filters


class SearchApplication(ListAPIView):
    """評価申請検索"""

    evaluation_qs = Evaluation.objects.select_related("evaluator")
    queryset = EvaluationApplication.objects.select_related("user", "sheet").prefetch_related(
        Prefetch("evaluation_set", evaluation_qs)
    )

    filterset_class = SearchApplicationFilterSet
    filter_backends = (filters.DjangoFilterBackend,)
    serializer_class = SearchApplicationSerializer


class EvaluationViewSet(ModelViewSet):
    """ラダー評価"""

    queryset = Evaluation.objects.select_related("evaluator")
    serializer_class = EvaluationSerializer

    def get_queryset(self):
        # filter by nested-router-keyword
        return self.queryset.filter(application=self.kwargs["applicationPk"])

    def get_serializer_class(self):
        try:
            if self.action in ["create", "partial_update"]:
                return EvaluationWriteSerializer
        except:  # noqa
            pass
        return super().get_serializer_class()


class EvaluationSummaryViewSet(RetrieveModelMixin, PartialUpdateModelMixin, CreateModelMixin, GenericViewSet):
    """評価総括記録"""

    queryset = EvaluationSummary.objects.select_related("supervisor")
    serializer_class = EvaluationSummarySerializer

    def get_queryset(self):
        # filter by nested-router-keyword
        return self.queryset.filter(application=self.kwargs["applicationPk"])

    def get_object(self):
        obj = self.get_queryset().first()
        if obj:
            return obj
        raise Http404


class SummaryAdditionalEvaluationItemViewSet(ListModelMixin, GenericViewSet):
    """評価総括記録に追加する評価項目"""

    queryset = SummaryAdditionalEvaluationItem.objects.all()
    serializer_class = SummaryAdditionalEvaluationItemSerializer
