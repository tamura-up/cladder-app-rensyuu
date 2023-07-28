from django.apps import AppConfig


class LadderConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "ladder"

    def ready(self):
        from project import container

        container.wire(modules=[".views", ".serializers"], packages=[".use_cases"])
