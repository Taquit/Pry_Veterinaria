from rest_framework import serializers
from .models import *

# --- Catálogos de Salud Animal ---
class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'

class SubtipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtipo
        fields = '__all__'

class SubtipoMamiferoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubtipoMamifero
        fields = '__all__'

class SubtipoExoticoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubtipoExotico
        fields = '__all__'

class CatalogoEdadPredispuestaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogoEdadPredispuesta
        fields = '__all__'

class CatalogoSexoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogoSexo
        fields = '__all__'

class CatalogoPatronSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogoPatron
        fields = '__all__'

class CatalogoSeveridadSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogoSeveridad
        fields = '__all__'

class CatalogoTipoVacunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogoTipoVacuna
        fields = '__all__'

# --- Catálogos de Color ---
class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class TipoColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoColor
        fields = '__all__'

# --- Catálogos de Gravedad e Importancia ---
class NivelGravedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = NivelGravedad
        fields = '__all__'

class NivelImportanciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = NivelImportancia
        fields = '__all__'

# --- Tipos de Alergias y Enfermedades ---
class TipoEnfermedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoEnfermedad
        fields = '__all__'

class TipoAlergiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoAlergias
        fields = '__all__'

# --- Salud y Enfermedades ---
class EnfermedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enfermedad
        fields = '__all__'

class AlergiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alergia
        fields = '__all__'

# --- Vacunas ---
class VacunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacuna
        fields = '__all__'

class VacunaPrevieneEnfermedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacunaPrevieneEnfermedad
        fields = '__all__'

# --- Información Geográfica ---
class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado
        fields = '__all__'

class MunicipioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Municipio
        fields = '__all__'

class CodigoPostalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodigoPostal
        fields = '__all__'

class TipoAsentamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoAsentamiento
        fields = '__all__'

class AsentamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asentamiento
        fields = '__all__'

# --- Domicilios y Contactos ---
class DomicilioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domicilio
        fields = '__all__'

class DuenoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dueno
        fields = '__all__'

class ContactoEmergenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactoEmergencia
        fields = '__all__'

# --- Empleados ---
class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'

# --- Mascotas ---
class MascotaBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaBase
        fields = '__all__'

class MascotaIdentificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaIdentificacion
        fields = '__all__'

class MascotaFisicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaFisica
        fields = '__all__'

class MascotaColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaColor
        fields = '__all__'

# --- Salud de Mascotas ---
class MascotaEnfermedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaEnfermedad
        fields = '__all__'

class MascotaAlergiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaAlergias
        fields = '__all__'

class MascotaVacunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaVacuna
        fields = '__all__'

class MascotaSaludSerializer(serializers.ModelSerializer):
    class Meta:
        model = MascotaSalud
        fields = '__all__'

# --- Servicios y Reservaciones ---
class TipoServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoServicio
        fields = '__all__'

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = '__all__'

class EstatusReservacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstatusReservacion
        fields = '__all__'

class EstatusHabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstatusHabit
        fields = '__all__'

class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = '__all__'

class ReservacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservaciones
        fields = '__all__'

class ReservacionDuracionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservacionDuracion
        fields = '__all__'

class ReservacionHotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservacionHotel
        fields = '__all__'

class BitacoraPaseoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BitacoraPaseo
        fields = '__all__'

# Versiones con relaciones anidadas para mejor representación
class DuenoDetailSerializer(serializers.ModelSerializer):
    domicilio = DomicilioSerializer(read_only=True)
    
    class Meta:
        model = Dueno
        fields = '__all__'
        extra_fields = ['domicilio']

class MascotaBaseDetailSerializer(serializers.ModelSerializer):
    dueno = DuenoSerializer(read_only=True)
    subtipo = SubtipoSerializer(read_only=True)
    sexo = CatalogoSexoSerializer(read_only=True)
    
    class Meta:
        model = MascotaBase
        fields = '__all__'
        extra_fields = ['dueno', 'subtipo', 'sexo']

class EnfermedadDetailSerializer(serializers.ModelSerializer):
    tipo_enfermedad = TipoEnfermedadSerializer(read_only=True)
    gravedad = NivelGravedadSerializer(read_only=True)
    subtipo = SubtipoSerializer(read_only=True)
    edad_predispuesta = CatalogoEdadPredispuestaSerializer(read_only=True)
    
    class Meta:
        model = Enfermedad
        fields = '__all__'
        extra_fields = ['tipo_enfermedad', 'gravedad', 'subtipo', 'edad_predispuesta']

class ReservacionesDetailSerializer(serializers.ModelSerializer):
    servicio = ServicioSerializer(read_only=True)
    mascota = MascotaBaseSerializer(read_only=True)
    empleado = EmpleadoSerializer(read_only=True)
    status = EstatusReservacionSerializer(read_only=True)
    
    class Meta:
        model = Reservaciones
        fields = '__all__'
        extra_fields = ['servicio', 'mascota', 'empleado', 'status']

class SearchSerializer(serializers.Serializer):
    query = serializers.CharField(max_length=100)
    model_type = serializers.CharField(max_length=50, required=False)
    
    def validate_model_type(self, value):
        valid_models = [
            'mascota', 'dueno', 'enfermedad', 'alergia', 
            'vacuna', 'empleado', 'servicio'
        ]
        if value and value not in valid_models:
            raise serializers.ValidationError(f"Modelo no válido. Opciones: {valid_models}")
        return value
    
