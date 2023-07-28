from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from accounts.models import User
from accounts.serializers import UserSerializer
from ladder.models import LadderSheet
from ladder.serializers import LadderSheetSerializer
from ladder_evaluations.models import (
    Evaluation,
    EvaluationApplication,
    EvaluationSummary,
    SummaryAdditionalEvaluationItem,
)


class EvaluationApplicationSerializer(ModelSerializer):
    """ラダー評価申請"""

    user = UserSerializer(help_text="申請ユーザー")
    sheet = LadderSheetSerializer("ラダーシート")

    class Meta:
        model = EvaluationApplication
        fields = "__all__"


class EvaluationApplicationWriteSerializer(ModelSerializer):
    """ラダー評価申請登録"""

    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), help_text="申請者ユーザーID")
    sheet = serializers.PrimaryKeyRelatedField(queryset=LadderSheet.objects.all(), help_text="ラダーシートID")

    class Meta:
        model = EvaluationApplication
        exclude = ["level", "status"]


class SearchEvaluationSerializer(ModelSerializer):
    evaluator = UserSerializer(help_text="評価者")

    class Meta:
        model = Evaluation
        fields = ["evaluator", "evaluator_type", "date", "fixed"]


class SearchApplicationSerializer(ModelSerializer):
    """ラダー評価申請検索結果"""

    user = UserSerializer(help_text="申請者")
    sheet_name = serializers.SlugRelatedField(
        source="sheet",
        slug_field="name",
        read_only=True,
        label="ラダーシート名",
    )
    evaluation_set = SearchEvaluationSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = EvaluationApplication
        fields = ["user", "level", "status", "created", "result", "evaluation_set", "sheet_name"]

    def to_representation(self, instance):
        # TODO: 権限によっては result は見せないことも検討
        return super().to_representation(instance)


class EvaluationSerializer(ModelSerializer):
    """ラダー評価"""

    evaluator = UserSerializer(help_text="評価者")

    class Meta:
        model = Evaluation
        fields = "__all__"
        read_only_fields = ["application"]


class EvaluationWriteSerializer(ModelSerializer):
    """ラダー評価登録・更新"""

    evaluator = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        help_text="評価者ID",
    )

    class Meta:
        model = Evaluation
        fields = "__all__"

    def validate_evaluator_type(self, val):
        if self.instance and self.instance != val:
            raise serializers.ValidationError("評価者区分は変更できません")
        return val


class EvaluationSummarySerializer(ModelSerializer):
    """評価総括記録"""

    supervisor = UserSerializer(help_text="評価責任者")

    class Meta:
        model = EvaluationSummary
        fields = "__all__"


class SummaryAdditionalEvaluationItemSerializer(ModelSerializer):
    """評価総括記録に追加する評価項目"""

    class Meta:
        model = SummaryAdditionalEvaluationItem
        fields = "__all__"
