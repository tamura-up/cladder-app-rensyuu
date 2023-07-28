import os
from pathlib import Path

from django.core.management.base import AppCommand

from request_dataclass_gen.renderer import Renderer
from request_dataclass_gen.schema import DataClassSchemaGenerator, get_class_fullname


class Command(AppCommand):
    """Request の dataclass モジュールを生成するコマンド"""

    help = "指定された app に Request の dataclass モジュールを作成します"

    def handle(self, *app_labels, **options):
        generator = DataClassSchemaGenerator()
        self.serializer_schemas = generator.get_request_serializer_schemas()

        res = super(Command, self).handle(*app_labels, **options)
        return res

    def handle_app_config(self, app_config, **options):
        app_module = app_config.__module__  # type:str
        app_module = app_module[: app_module.rfind(".")]

        app_schema_list = []
        for d in self.serializer_schemas:
            serializer_instance = d["serializer"]
            serializer_class = serializer_instance.__class__
            name = get_class_fullname(serializer_class)  #
            if name.startswith(app_module):
                app_schema_list.append(d)

        if not app_schema_list:
            return

        # 保存先
        app_path = Path(os.path.dirname(app_config.module.__file__))
        file_path = app_path / "request_dataclasses_base.py"

        renderer = Renderer(app_schema_list)
        renderer.render(file_path)
        print("generated ", file_path)
