from rest_framework import generics, permissions
from posts.models import Post
from .serializers import PostSerializer
from .serializers import TaskSerializer
from tasks.models import Task

class PostList(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class TaskList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Task.objects.filter(author=self.request.user)
    serializer_class = TaskSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Task.objects.filter(author=self.request.user)
    serializer_class = PostSerializer
