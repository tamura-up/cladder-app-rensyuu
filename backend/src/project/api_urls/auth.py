from dj_rest_auth.views import LogoutView, UserDetailsView
from django.urls import path
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie

from prj_auth import views as prj_auth_views
from prj_auth.views import RegisterUserView

urlpatterns = [
    path("auth/login/", prj_auth_views.LoginView.as_view(), name="rest_login"),
    path("auth/logout/", LogoutView.as_view(), name="rest_logout"),
    path("auth/token/refresh/", prj_auth_views.RefreshView.as_view(), name="token_refresh"),
    path("auth/csrf/", prj_auth_views.CSRFView.as_view(), name="csrf_token"),
    path("auth/login_user/", cache_page(10)(vary_on_cookie(UserDetailsView.as_view())), name="rest_user_details"),
    path("auth/register/", RegisterUserView.as_view(), name="register_user"),
]
