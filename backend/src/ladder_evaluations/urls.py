from django.urls import include, path
from rest_framework_nested import routers

from ladder_evaluations import views

router = routers.SimpleRouter()
router.register("applications", views.EvaluationApplicationViewSet, "ladder-application")

application_router = routers.NestedSimpleRouter(router, "applications", lookup="application")
application_router.register("evaluations", views.EvaluationViewSet, basename="ladder-evaluation")

router.register(
    "summary_additional_evaluation_items",
    views.SummaryAdditionalEvaluationItemViewSet,
    "summary-additional-evaluation-item",
)

summary_view = views.EvaluationSummaryViewSet.as_view(
    {
        "get": "retrieve",
        "post": "create",
        "patch": "partial_update",
    }
)
urlpatterns = [
    path("", include(router.urls)),
    path("", include(application_router.urls)),
    path("applications/search/", views.SearchApplication.as_view(), name="ladder-application-serch"),
    path("applications/<int:applicationPk>/evaluation_summary/", summary_view, name="ladder-evaluation_summary"),
]
