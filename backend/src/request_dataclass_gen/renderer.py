import inspect
from collections import defaultdict
from pathlib import Path
from typing import Dict, List

from request_dataclass_gen.schema import DField
from request_dataclass_gen.utils import get_class_fullname


class RenderTemplate:
    def __init__(self):
        self.imports = set()
        self.dataclasses = defaultdict(list)  # type:Dict

    def add_field(self, dataclass_name: str, field: DField):
        if inspect.isclass(field.type):
            module = inspect.getmodule(field.type)
            root_module = module.__name__.split(".")[0]
            self.imports.add(root_module)
            field = DField(field.name, get_class_fullname(field.type))
        elif field.type is None:
            self.imports.add("typing")
            field = DField(field.name, "typing.Any")

        self.dataclasses[dataclass_name].append(field)


HEADER_TXT = """# ===================================================================================================
# このファイルは自動作成されました。
# 上書きされる可能性があるため、変更する場合は別のモジュールで 継承 or 新規作成 して変更してください。
# ===================================================================================================
"""


class Renderer:
    def __init__(self, schemas: List[Dict]):
        """
        schemas: DataClassSchemaGenerator から得た Serializer のスキーマ情報を持つ dict のリスト
        """
        self.schemas = schemas

    def render(self, output_path: [str, Path]):
        """Serializer のフィールド情報を dataclass で定義したモジュールを出力します"""

        templates = dict()
        for schema in self.schemas:
            serializer_cls = schema["serializer"].__class__

            fields = schema["fields"]
            root_module = get_class_fullname(serializer_cls).split(".")[0]
            if root_module not in templates:
                template = RenderTemplate()
                templates[root_module] = template
            else:
                template = templates[root_module]

            name = serializer_cls.__name__  # type:str
            name = name.split("Serializer")[0]
            for f in fields:
                template.add_field(name, f)

        for name, template in templates.items():
            with open(output_path, mode="w") as f:
                f.write(HEADER_TXT)
                f.write("\n")
                f.write("from dataclasses import dataclass\n")
                for i in template.imports:
                    f.write(f"import {i}")
                    f.write("\n")

                f.write("\n")
                for name, fields in template.dataclasses.items():
                    f.write("@dataclass\n")
                    f.write(f"class {name}RequestA:\n")  # 末尾 A つけて、自動生成したものを区別してる
                    for field in fields:
                        # HACK: とりあえずデフォルト値 None にしてる
                        #       この dataclass 使っていけそうなら required, default value を考慮してもよい
                        f.write(f"\t{field.name}:{field.type} = None\n")

                    f.write("\n")
