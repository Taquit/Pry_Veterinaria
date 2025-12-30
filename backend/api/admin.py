from django.contrib import admin
from .models import Tipo, Subtipo, Subtipo_exotico, Subtipo_Mamifero

admin.site.register(Tipo)
admin.site.register(Subtipo)
admin.site.register(Subtipo_exotico)
admin.site.register(Subtipo_Mamifero)
# Register your models here.
