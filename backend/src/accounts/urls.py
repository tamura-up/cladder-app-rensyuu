from rest_framework import routers

from accounts import views

router = routers.SimpleRouter()
router.register("users", views.UserViewSet, 'users')

urlpatterns = router.urls
