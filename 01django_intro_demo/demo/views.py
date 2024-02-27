from django.shortcuts import render
from django.http import HttpResponse
import datetime
from django.views import View
from .models import Book

# Create your views here.

# Demo using serializers
from rest_framework import viewsets
from .serializers import BookSerializer, MiniBookSerializer
from .models import Book
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = MiniBookSerializer
    queryset = Book.objects.all()
    authentication_classes = (TokenAuthentication,)
    # if we have allowAny set in settings for authorization but want users to verify, we can do it below individually,
    # Or we can also do it vice-versa
    # permission_classes = (IsAuthenticated,)
    permission_classes = (AllowAny,)

    # code from ModelViesSet codes and overwriting to our specs
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = BookSerializer(instance)
        return Response(serializer.data)


    # if we select id then we will get all the details of the entry...
    # using mini up and all details retrival system saves space and compute and increase speed of pages


# Using class as Views()
# class ViewClass(View):
#     books_data = Book.objects.all()
#     # books_data_filtered = Book.objects.filter(is_published=True)
#     output = ''
#     for book in books_data:
#         output += f"Book Id: {book.id} <br> Book Title: {book.title}"
#
#     def get(self, request):
#         return HttpResponse(self.output)
#         # return HttpResponse("This is a class view output from the get method abstracted from the original View class "
#         #                     "from django library.<br>"
#         #                     "\n does not work for new line, we use html break"
#         #                     f"<br> Today's date: {datetime.datetime.now().strftime('%Y-%m-%d')}"
#         #                     f"<br>\nFor loop output: {[n for n in range(1,10)]}")
#
#         # return HttpResponse(f"""
#         #                     This is a class view output from the get method abstracted from the original View class
#         #                     from django library. \n
#         #                     Today's date: {datetime.datetime.now().strftime('%Y-%m-%d')}
#         #                     \n
#         #                     For loop output: {[n for n in range(1,10)]}
#         #                     """)


# using functions in views
def first_view_demo(request):
    return HttpResponse("This is the return statement output of first_veiw_demo func()."
                        f"\n{datetime.datetime.now().strftime('%Y-%m-%d')}")


def html_view_demo(request):
    books_data = Book.objects.all()
    return render(request, 'first_template.html', {'books_data': books_data})
