from django.urls import path
from .views import PostList, PostDetail
from .views import TaskList , TaskDetail


urlpatterns = [
    path('', PostList.as_view(), name='post-list-api'),
    path('<int:pk>/', PostDetail.as_view(), name='post-detail-api'),
    path('tasks/' ,TaskList.as_view(), name='task-list-api'),
    path('tasks/<int:pk>/' ,TaskDetail.as_view(), name='task-detail-api'),
]
