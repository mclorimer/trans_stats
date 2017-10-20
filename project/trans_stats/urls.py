from django.conf.urls import url
from trans_stats.views import IndexView
from . import views

urlpatterns = [
    url(r'^trans_stats/', IndexView.as_view(), name='index'),
    url(r'^$', views.homeView, name="home")
]