from django.urls import path, include
from . import views
from .views import BookViewSet  # ,ViewClass
from rest_framework import routers

router = routers.DefaultRouter()
router.register('books', BookViewSet)

urlpatterns = [
    path("firstview", views.first_view_demo),
    # path("classview", ViewClass.as_view()),
    path("htmldemoview", views.html_view_demo),
    # path("bookviewset", include(router.urls)),
    path("", include(router.urls)),  # specifying no name resolves to default thus url/demo/ will lead us her
]
