import datetime
import typing
from dataclasses import dataclass
from typing import Dict, List

from django.db import models
from drf_spectacular.drainage import get_override
from drf_spectacular.generators import SchemaGenerator
from drf_spectacular.openapi import AutoSchema
from drf_spectacular.plumbing import follow_field_source, force_instance
from rest_framework import serializers
from rest_framework.fields import Field
from rest_framework.serializers import Serializer
from rest_framework.utils.model_meta import get_field_info

from request_dataclass_gen.utils import get_class_fullname


@dataclass
class DField:
    """生成する dataclass のフィールド定義情報"""

    name: str
    type: [str, object, None] = None


def map_serializer_field(field: Field) -> DField:
    res = _map_serializer_field_type(field)
    return DField(field.field_name, res)


def _map_serializer_field_type(field: Field) -> [str, typing.ClassVar, None]:
    """
    Serializer のフィールドに対応する型を取得します

    org src:drf_spectacular.openapi.py
    """
    if isinstance(field, serializers.PrimaryKeyRelatedField):
        if getattr(field, "queryset", None) is not None:
            model_field = field.queryset.model._meta.pk
        else:
            if isinstance(field.parent, serializers.ManyRelatedField):
                model = field.parent.parent.Meta.model
                source = field.parent.source.split(".")
            else:
                model = field.parent.Meta.model
                source = field.source.split(".")

            # estimates the relating model field and jumps to it's target model PK field.
            # also differentiate as source can be direct (pk) or relation field (model).
            model_field = follow_field_source(model, source)
            if callable(model_field):
                # follow_field_source bailed with a warning. be graceful and default to str.
                model_field = models.TextField()

        # primary keys are usually non-editable (readOnly=True) and map_model_field correctly
        # signals that attribute. however this does not apply in the context of relations.
        return _map_model_field(model_field)

    # TODO:serializer のフィールドと対応を定義する dict or method 作ったほうが良い
    if isinstance(field, serializers.StringRelatedField):
        return "str"

    if isinstance(field, serializers.SlugRelatedField):
        return "str"

    if isinstance(field, serializers.UUIDField):
        return "str"

    if isinstance(field, serializers.IntegerField):
        return "int"
    if isinstance(field, serializers.BooleanField):
        return "bool"

    if isinstance(field, serializers.CharField):
        return "str"

    # DateField and DateTimeField type is string
    if isinstance(field, serializers.DateField):
        return datetime.date

    if isinstance(field, serializers.DateTimeField):
        return datetime.datetime

    if isinstance(field, serializers.TimeField):
        return datetime.time

    if isinstance(field, serializers.EmailField):
        return "str"

    if isinstance(field, serializers.URLField):
        return "str"

    return None


def _map_model_field(model_field) -> typing.Optional[typing.Union[str, object]]:
    """
    org src:drf_spectacular.openapi.py
    """
    assert isinstance(model_field, models.Field)
    # to get a fully initialized serializer field we use DRF's own init logic
    try:
        field_cls, field_kwargs = serializers.ModelSerializer().build_field(
            field_name=model_field.name,
            info=get_field_info(model_field.model),
            model_class=model_field.model,
            nested_depth=0,
        )
        field = field_cls(**field_kwargs)
        field.field_name = model_field.name
    except:  # noqa
        field = None

    # For some cases, the DRF init logic either breaks (custom field with internal type) or
    # the resulting field is underspecified with regards to the schema (ReadOnlyField).
    if field and isinstance(field, serializers.PrimaryKeyRelatedField):
        # TODO: このとき、モデルクラスを返すのが正しい？ (model_field.related_model)

        # special case handling only for _resolve_path_parameters() where neither queryset nor
        # parent is set by build_field. patch in queryset as _map_serializer_field requires it
        if not field.queryset:
            field.queryset = model_field.related_model.objects.none()
        return _map_serializer_field_type(field)
    elif isinstance(field, serializers.ManyRelatedField):
        # special case handling similar to the case above. "parent.parent" on child_relation
        # is None and there is no queryset. patch in as _map_serializer_field requires one.
        if not field.child_relation.queryset:
            field.child_relation.queryset = model_field.related_model.objects.none()
        return _map_serializer_field_type(field)
    elif field and not isinstance(field, (serializers.ReadOnlyField, serializers.ModelField)):
        return _map_serializer_field_type(field)
    elif isinstance(model_field, models.ForeignKey):
        return _map_model_field(model_field.target_field)
    elif hasattr(models, "JSONField") and isinstance(model_field, models.JSONField):
        return "str"
    elif isinstance(model_field, models.BinaryField):
        return "bytes"
    elif hasattr(models, model_field.get_internal_type()):
        # be graceful when the model field is not explicitly mapped to a serializer
        internal_type = getattr(models, model_field.get_internal_type())
        field_cls = serializers.ModelSerializer.serializer_field_mapping.get(internal_type)
        if not field_cls:
            print(
                f'model field "{model_field.get_internal_type()}" has no mapping in '
                f'ModelSerializer. It may be a deprecated field. Defaulting to "typing.Any"'
            )
            return None
        return _map_serializer_field_type(field_cls())
    else:
        print(
            f'could not resolve model field "{model_field}". Failed to resolve through '
            f"serializer_field_mapping, get_internal_type(), or any override mechanism. "
            f'Defaulting to "typing.Any"'
        )
        return None


class DataClassSchemaGenerator(SchemaGenerator):
    """drf_spectacular の SchemaGenerator のパワーを借りてエンドポイントを読み込みます"""

    def get_request_serializer_schemas(self) -> List[Dict]:
        """
        リクエストエンドポイントの Serializer 情報を取得します

        Returns:
            serializer の情報をもつ dict のリストを返します
            dict のフィールドは以下
            - serializer: serializer インスタンス
            - fields: フィールド情報
        """

        self._initialise_endpoints()
        endpoints = self._get_paths_and_endpoints()
        ss = []
        for u1, u2, method, view in endpoints:
            if method in [
                "POST",
                "PUT",
                "PATCH",
            ]:
                if isinstance(view.schema, AutoSchema):
                    try:
                        serializer = view.schema.get_request_serializer()
                        if serializer is None:
                            continue
                        ss.append(serializer)

                    except:
                        pass

        res = []
        st = set()
        for s in ss:
            serializer = force_instance(s)  # type:Serializer
            if get_class_fullname(serializer.__class__) in st:
                continue
            st.add(get_class_fullname(serializer.__class__))

            fields = []
            for field in serializer.fields.values():
                if isinstance(field, serializers.HiddenField):
                    continue
                if field.field_name in get_override(serializer, "exclude_fields", []):
                    continue
                if field.read_only:
                    continue

                x = map_serializer_field(field)
                fields.append(x)

            res.append(dict(serializer=serializer, fields=fields))
        return res
