from rest_framework import serializers
from .models import *

class TiposSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'

class SubtipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtipo
        fields = '__all__'

class Subtipo_ExoticoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtipo_exotico
        fields = '__all__'

class Subtipo_MamiferoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtipo_Mamifero
        fields = '__all__'

class VacunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacuna
        fields = '__all__'

class Mascota_VacunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota_Vacuna
        fields = '__all__'

class CatalogoCPSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogoCP
        fields = '__all__'

class DomicilioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domicilio
        fields = '__all__'

class DueñoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dueño
        fields = '__all__'

class Contacto_emergenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto_emergencia
        fields = '__all__'

class PuestoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puesto
        fields = '__all__'

class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = '__all__'

class PuestoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puesto
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'

class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = '__all__'  

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = '__all__'

class ReservacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservacion
        fields = '__all__'

class Reservacion_ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservacion_Servicio
        fields = '__all__'

