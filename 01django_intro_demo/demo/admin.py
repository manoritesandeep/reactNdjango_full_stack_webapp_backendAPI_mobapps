from django.contrib import admin
from .models import Book, BookNumber, Characters, Authors


# Register your models here.
# admin.site.register(Book)

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    fields = ['title', 'price', 'description', 'quantity', 'number',  'published_date', 'cover']
    list_display = ['title', 'price', 'quantity']
    list_filter = ['published_date']
    search_fields = ['title', 'description']


admin.site.register(BookNumber)
admin.site.register(Characters)
admin.site.register(Authors)