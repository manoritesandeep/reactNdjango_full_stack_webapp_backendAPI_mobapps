from django.db import models


class BookNumber(models.Model):
    isbn_10 = models.CharField(max_length=10, blank=True)
    isbn_13 = models.CharField(max_length=13, blank=True)


class Book(models.Model):
    title = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=256, blank=True)
    id_bigint = models.BigIntegerField(default=0)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(default=0, decimal_places=0, max_digits=3)
    published_date = models.DateField(default='1970-01-01')
    is_published = models.BooleanField(default=True)
    number = models.OneToOneField(to=BookNumber, null=True, blank=True, on_delete=models.CASCADE)
    cover = models.FileField(upload_to='cover/', blank=True)
    cover_image = models.ImageField(upload_to='cover/images/', blank=True)

    def __str__(self):
        return self.title


class Characters(models.Model):
    name = models.CharField(max_length=50)
    # create reference to Book class
    book = models.ForeignKey(Book, on_delete=models.CASCADE,
                             related_name='characters')


class Authors(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    book = models.ManyToManyField(Book, related_name='authors')