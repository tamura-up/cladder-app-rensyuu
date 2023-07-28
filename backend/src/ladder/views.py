from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet

from ladder.models import LadderCriterion, LadderDomainHead, LadderSheet
from ladder.serializers import (
    LadderCriterionSerializer,
    LadderDomainSerializer,
    LadderSheetSerializer,
)
from lib.views import ModelViewSet


class LadderSheetViewSet(ModelViewSet):
    """ラダーシート"""

    # TODO: detail は 項目も一緒に取得する

    queryset = LadderSheet.objects.all()
    serializer_class = LadderSheetSerializer
    permission_classes = [IsAuthenticated]


class LadderDomainViewSet(ReadOnlyModelViewSet):
    """目標領域分類のヘッダーと項目"""

    queryset = LadderDomainHead.objects.prefetch_related("classes")
    serializer_class = LadderDomainSerializer


class LadderCriterionViewSet(ModelViewSet):
    """評価項目"""

    queryset = LadderCriterion.objects.all()
    serializer_class = LadderCriterionSerializer
