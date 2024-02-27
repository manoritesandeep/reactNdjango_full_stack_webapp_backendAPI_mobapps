from rest_framework import serializers
from .models import Book, BookNumber, Characters, Authors


class BookNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookNumber
        fields = ['id', 'isbn_10', 'isbn_13']


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characters
        fields = ['id', 'name']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authors
        fields = ['id', 'name', 'surname']


class BookSerializer(serializers.ModelSerializer):
    number = BookNumberSerializer(many=False)
    characters = CharacterSerializer(many=True)
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'description',
                  'is_published', 'price', 'number',
                  'characters', 'authors']


class MiniBookSerializer(serializers.ModelSerializer):
    # We can have multiple serializers for one class Book in this case.
    class Meta:
        model = Book
        fields = ['id', 'title']
