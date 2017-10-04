from django.conf.urls import url
from trans_stats.views import IndexView

urlpatterns = [
    url(r'^trans_stats/', IndexView.as_view(), name='index')
]