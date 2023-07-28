from typing import Dict

from dependency_injector.wiring import Provide
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from ladder.models import (
    LadderCriterion,
    LadderDomainClass,
    LadderDomainHead,
    LadderSheet,
)
from ladder.resources.request_dataclasses_base import LadderSheetRequestA
from ladder.use_cases.ladder_sheet.create_action import LadderSheetCreateAction
from ladder.use_cases.ladder_sheet.edit_action import LadderSheetEditAction
from lib.interfaces.application.use_case import UseCaseExecutor
from project.containers import Container
from request_dataclass_gen.data_wrapper import generate_request_data


class LadderDomainClassSerializer(ModelSerializer):
    """目標領域分類項目"""

    class Meta:
        model = LadderDomainClass
        fields = "__all__"


class LadderDomainSerializer(ModelSerializer):
    """目標領域分類のヘッダーと項目"""

    classes = LadderDomainClassSerializer(many=True)

    class Meta:
        model = LadderDomainHead
        fields = "__all__"


class LadderDomainRegisterSerializer(ModelSerializer):
    """
    目標領域分類の登録情報
    TODO: 2023-07-24 Serializier だけ作成して、登録処理は後回しにした
    """

    hierarchical_classes = serializers.JSONField(write_only=True, required=True, help_text="目標領域分類項目を json で指定します")

    def _validate_domain_class(self, cls: dict):
        res = True
        if "children" in cls.keys():
            for c in cls["children"]:
                res = res and self._validate_domain_class(c)
        return res and "title" in cls.keys()

    def validate_hierarchical_classes(self, classes: Dict):
        if not self._validate_domain_class(classes):
            raise serializers.ValidationError("分類項目の指定方法が正しくありません")
        return classes

    class Meta:
        model = LadderDomainHead
        fields = "__all__"


class TargetListSerializer(serializers.ListSerializer):
    child = serializers.CharField()

    def save(self, **kwargs):
        print("ts save", kwargs)
        return super().save(**kwargs)

    def create(self, validated_data):
        print("ts create", validated_data)
        return validated_data

    def validate(self, attrs):
        print("ts", attrs)
        return attrs

    def to_representation(self, data):
        print("ts rep", data)
        return data

    def to_internal_value(self, data):
        print("ts int", data)
        return data


class LadderSheetSerializer(ModelSerializer):
    """ラダーシート"""

    domain_head = serializers.PrimaryKeyRelatedField(queryset=LadderDomainHead.objects.all())
    target_list = serializers.ListField(allow_null=True, allow_empty=True, required=False)

    use_case_executor: UseCaseExecutor = Provide[Container.use_case_executor]

    class Meta:
        model = LadderSheet
        exclude = ["targets"]

    def create(self, validated_data):
        request_data = generate_request_data(LadderSheetRequestA, validated_data)
        action = LadderSheetCreateAction(request_data)
        instance = self.use_case_executor.execute(action)

        return instance

    def update(self, instance, validated_data):
        request_data = generate_request_data(LadderSheetRequestA, validated_data)
        action = LadderSheetEditAction(instance, request_data)
        instance = self.use_case_executor.execute(action)
        return instance


class LadderCriterionSerializer(ModelSerializer):
    """評価項目"""

    sheet = serializers.PrimaryKeyRelatedField(queryset=LadderSheet.objects.all())
    target_item = serializers.PrimaryKeyRelatedField(queryset=LadderDomainClass.objects.all())

    class Meta:
        model = LadderCriterion
        fields = "__all__"
