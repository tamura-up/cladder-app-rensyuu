from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework_extensions.mixins import DetailSerializerMixin

from accounts.models import User
from accounts.serializers import UserDetailSerializer, UserSerializer
from lib.views import ModelViewSet
from rest_framework.filters import SearchFilter



class UserViewSet(DetailSerializerMixin, ReadOnlyModelViewSet):
    """ユーザー情報取得"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    serializer_detail_class = UserDetailSerializer

    queryset = User.objects.all()
    filter_backends = (SearchFilter, )
    search_fields = ('first_name', 'last_name')  # drfのフィルターの検索
