from rest_framework import routers

from ladder import views

router = routers.SimpleRouter()
router.register("sheets", views.LadderSheetViewSet, "ladder-sheet")
router.register("domains", views.LadderDomainViewSet, "ladder-domain")

urlpatterns = router.urls
