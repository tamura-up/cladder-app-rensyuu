from django.conf.urls import include
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

import ladder.urls
import ladder_evaluations.urls

from . import auth

urlpatterns = [
    # SCHEMA
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
]

# 各 application の urls をここに追加していく

urlpatterns += auth.urlpatterns
urlpatterns += [path("ladder/", include(ladder.urls))]
urlpatterns += [path("ladder/", include(ladder_evaluations.urls))]
