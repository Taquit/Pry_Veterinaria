from django.db import models

# --- Catálogos de Salud Animal ---
class Tipo(models.Model):
    id_Tipo = models.BigAutoField(primary_key=True)
    Tipo = models.CharField(max_length=100)

    def __str__(self):
        return self.Tipo

class Subtipo(models.Model):
    id_subtipo = models.BigAutoField(primary_key=True)
    nom_subtipo = models.CharField(max_length=100)
    esp_vidamin = models.IntegerField()
    esp_vidamax = models.IntegerField()
    desc_subtipo = models.TextField()
    id_Tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)

    def __str__(self):
        return self.nom_subtipo

class SubtipoMamifero(models.Model):
    id_subtipo = models.OneToOneField(Subtipo, on_delete=models.CASCADE, primary_key=True)
    peso_Min = models.IntegerField()
    peso_Max = models.IntegerField()
    size_subtipo = models.CharField(max_length=50)

class SubtipoExotico(models.Model):
    id_subtipo = models.OneToOneField(Subtipo, on_delete=models.CASCADE, primary_key=True)
    min_size = models.IntegerField()
    max_size = models.IntegerField()
    nivel_interaccion = models.IntegerField()

class CatalogoEdadPredispuesta(models.Model):
    id_edad_predispuesta = models.BigAutoField(primary_key=True)
    rango_edad = models.CharField(max_length=50)

    def __str__(self):
        return self.rango_edad

class CatalogoSexo(models.Model):
    id_sexo = models.CharField(max_length=1, primary_key=True)
    nombre_sexo = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre_sexo

class CatalogoPatron(models.Model):
    id_patron = models.BigAutoField(primary_key=True)
    nombre_patron = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre_patron

class CatalogoSeveridad(models.Model):
    id_severidad = models.BigAutoField(primary_key=True)
    nivel_severidad = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nivel_severidad

class CatalogoTipoVacuna(models.Model):
    id_tipo_vacuna = models.BigAutoField(primary_key=True)
    nombre_tipo = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_tipo

# --- Catálogos de Color ---
class Color(models.Model):
    id_color = models.BigAutoField(primary_key=True)
    nom_color = models.CharField(max_length=50)

    def __str__(self):
        return self.nom_color

class TipoColor(models.Model):
    id_tipo_color = models.BigAutoField(primary_key=True)
    nombre_tipo = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.nombre_tipo

# --- Catálogos de Gravedad e Importancia ---
class NivelGravedad(models.Model):
    id_gravedad = models.BigAutoField(primary_key=True)
    nombre_gravedad = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_gravedad

class NivelImportancia(models.Model):
    id_importancia = models.BigAutoField(primary_key=True)
    nombre_importancia = models.CharField(max_length=50)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_importancia

# --- Tipos de Alergias y Enfermedades ---
class TipoEnfermedad(models.Model):
    id_tipo_enfermedad = models.BigAutoField(primary_key=True)
    nombre_tipo = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_tipo

class TipoAlergias(models.Model):
    id_tipo_alergia = models.BigAutoField(primary_key=True)
    nombre_tipo = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_tipo

# --- Salud y Enfermedades ---
class Enfermedad(models.Model):
    id_enfermedad = models.BigAutoField(primary_key=True)
    nombre_enfermedad = models.CharField(max_length=255)
    agente_causal = models.TextField(blank=True, null=True)
    id_tipo_enfermedad = models.ForeignKey(TipoEnfermedad, on_delete=models.CASCADE)
    sintomas = models.TextField(blank=True, null=True)
    forma_transmision = models.TextField(blank=True, null=True)
    tratamiento = models.TextField(blank=True, null=True)
    prevencion = models.TextField(blank=True, null=True)
    id_gravedad = models.ForeignKey(NivelGravedad, on_delete=models.CASCADE)
    id_subtipo = models.ForeignKey(Subtipo, on_delete=models.CASCADE)
    id_edad_predispuesta = models.ForeignKey(CatalogoEdadPredispuesta, on_delete=models.CASCADE)
    clasificacion = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.nombre_enfermedad

class Alergia(models.Model):
    id_alergia = models.BigAutoField(primary_key=True)
    nombre_alergia = models.CharField(max_length=255)
    agente_causal = models.TextField(blank=True, null=True)
    sintomas = models.TextField(blank=True, null=True)
    tratamiento = models.TextField(blank=True, null=True)
    id_tipo_alergia = models.ForeignKey(TipoAlergias, on_delete=models.CASCADE)
    id_gravedad = models.ForeignKey(NivelGravedad, on_delete=models.CASCADE)
    id_subtipo = models.ForeignKey(Subtipo, on_delete=models.CASCADE)
    id_edad_predispuesta = models.ForeignKey(CatalogoEdadPredispuesta, on_delete=models.CASCADE)
    clasificacion = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.nombre_alergia

# --- Vacunas ---
class Vacuna(models.Model):
    id_vacuna = models.BigAutoField(primary_key=True)
    nombre_vacuna = models.CharField(max_length=255)
    id_importancia = models.ForeignKey(NivelImportancia, on_delete=models.CASCADE)
    id_tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
    id_tipo_vacuna = models.ForeignKey(CatalogoTipoVacuna, on_delete=models.CASCADE)
    descripcion = models.TextField(blank=True, null=True)
    vigencia_dias = models.IntegerField()

    def __str__(self):
        return self.nombre_vacuna

class VacunaPrevieneEnfermedad(models.Model):
    id_vacuna = models.ForeignKey(Vacuna, on_delete=models.CASCADE)
    id_enfermedad = models.ForeignKey(Enfermedad, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = ('id_vacuna', 'id_enfermedad')

# --- Información Geográfica ---
class Estado(models.Model):
    id_estado = models.BigAutoField(primary_key=True)
    d_estado = models.CharField(max_length=50)

    def __str__(self):
        return self.d_estado

class Municipio(models.Model):
    id_mnpio = models.BigAutoField(primary_key=True)
    d_mnpio = models.CharField(max_length=50)
    id_estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self):
        return self.d_mnpio

class CodigoPostal(models.Model):
    codigoP = models.CharField(max_length=5, primary_key=True)
    id_mnpio = models.ForeignKey(Municipio, on_delete=models.CASCADE)

    def __str__(self):
        return self.codigoP

class TipoAsentamiento(models.Model):
    id_tipo_asenta = models.BigAutoField(primary_key=True)
    d_tipo_asenta = models.CharField(max_length=50)

    def __str__(self):
        return self.d_tipo_asenta

class Asentamiento(models.Model):
    id_asenta = models.BigAutoField(primary_key=True)
    d_asenta = models.CharField(max_length=200)
    codigoP = models.ForeignKey(CodigoPostal, on_delete=models.CASCADE)
    id_tipo_asenta = models.ForeignKey(TipoAsentamiento, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.d_asenta

# --- Domicilios y Contactos ---
class Domicilio(models.Model):
    id_domicilio = models.BigAutoField(primary_key=True)
    nom_calle = models.CharField(max_length=100)
    num_calleext = models.CharField(max_length=10)
    num_calleint = models.CharField(max_length=10, blank=True, null=True)
    id_asenta = models.ForeignKey(Asentamiento, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f"{self.nom_calle} {self.num_calleext}"

class Dueno(models.Model):
    id_dueno = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_Mat = models.CharField(max_length=100)
    apellido_Pat = models.CharField(max_length=100)
    telefono = models.CharField(max_length=13)
    correo = models.EmailField(max_length=255)
    id_domicilio = models.ForeignKey(Domicilio, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido_Pat}"

class ContactoEmergencia(models.Model):
    id_contacto = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_pat = models.CharField(max_length=100)
    apellido_mat = models.CharField(max_length=100)
    telefono = models.CharField(max_length=13)
    correo = models.EmailField(max_length=255)
    id_dueno = models.OneToOneField(Dueno, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido_pat}"

# --- Empleados ---
class Rol(models.Model):
    id_rol = models.BigAutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=55)

    def __str__(self):
        return self.nombre_rol

class Empleado(models.Model):
    id_empleado = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_pat = models.CharField(max_length=100)
    apellido_mat = models.CharField(max_length=100)
    telefono = models.CharField(max_length=13)
    correo = models.EmailField(max_length=255)
    id_rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido_pat}"

# --- Mascotas ---
class MascotaBase(models.Model):
    id_mascota = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    f_nac = models.DateField(null=True, blank=True)
    esterilizado = models.BooleanField()
    sexo = models.ForeignKey(CatalogoSexo, on_delete=models.CASCADE)
    id_Duno = models.ForeignKey(Dueno, on_delete=models.CASCADE)
    id_subtipo = models.ForeignKey(Subtipo, on_delete=models.CASCADE)
    foto_url = models.CharField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.nombre

class MascotaIdentificacion(models.Model):
    id_mascota = models.OneToOneField(MascotaBase, on_delete=models.CASCADE, primary_key=True)
    chip = models.CharField(max_length=20, blank=True, null=True)
    ruac = models.CharField(max_length=15, blank=True, null=True)

class MascotaFisica(models.Model):
    id_registro = models.BigAutoField(primary_key=True)
    id_mascota = models.ForeignKey(MascotaBase, on_delete=models.CASCADE)
    tamano = models.IntegerField(null=True, blank=True)
    peso = models.IntegerField(null=True, blank=True)

class MascotaColor(models.Model):
    id_mascota = models.ForeignKey(MascotaBase, on_delete=models.CASCADE)
    id_color = models.ForeignKey(Color, on_delete=models.CASCADE)
    tipo_color = models.ForeignKey(TipoColor, on_delete=models.CASCADE)
    id_patron = models.ForeignKey(CatalogoPatron, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = (('id_mascota', 'tipo_color'), ('id_mascota', 'id_color', 'tipo_color'))

# --- Salud de Mascotas ---
class MascotaEnfermedad(models.Model):
    id_mascota = models.ForeignKey(MascotaBase, on_delete=models.CASCADE)
    id_enfermedad = models.ForeignKey(Enfermedad, on_delete=models.CASCADE)
    fecha_diagnostico = models.DateField()
    fecha_recuperacion = models.DateField(null=True, blank=True)
    notas = models.TextField(blank=True, null=True)
    
    class Meta:
        unique_together = ('id_mascota', 'id_enfermedad', 'fecha_diagnostico')
        constraints = [
            models.CheckConstraint(
                check=models.Q(fecha_recuperacion__isnull=True) | 
                       models.Q(fecha_recuperacion__gte=models.F('fecha_diagnostico')),
                name='recuperacion_check2'
            )
        ]

class MascotaAlergias(models.Model):
    id_mascota = models.ForeignKey(MascotaBase, on_delete=models.CASCADE)
    id_alergia = models.ForeignKey(Alergia, on_delete=models.CASCADE)
    fecha_diagnostico = models.DateField()
    id_severidad = models.ForeignKey(CatalogoSeveridad, on_delete=models.CASCADE, null=True)
    notas = models.TextField(blank=True, null=True)
    
    class Meta:
        unique_together = ('id_mascota', 'id_alergia')

class MascotaVacuna(models.Model):
    id_mascota = models.ForeignKey(MascotaBase, on_delete=models.CASCADE)
    id_vacuna = models.ForeignKey(Vacuna, on_delete=models.CASCADE)
    fecha_aplicacion = models.DateField()
    fecha_refuerzo = models.DateField(null=True, blank=True)
    lote = models.CharField(max_length=50, blank=True, null=True)
    notas = models.TextField(blank=True, null=True)
    
    class Meta:
        unique_together = ('id_mascota', 'id_vacuna', 'fecha_aplicacion')

class MascotaSalud(models.Model):
    id_mascota = models.OneToOneField(MascotaBase, on_delete=models.CASCADE, primary_key=True)
    cartilla_vac = models.BooleanField()
    enfermedades = models.BooleanField()
    notas = models.TextField(blank=True, null=True)

# --- Servicios y Reservaciones ---
class TipoServicio(models.Model):
    id_tipo_servicio = models.BigAutoField(primary_key=True)
    nombre_tipo = models.CharField(max_length=50)
    requiere_habitacion = models.BooleanField(default=False)
    requiere_duracion = models.BooleanField(default=False)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre_tipo

class Servicio(models.Model):
    id_servicio = models.BigAutoField(primary_key=True)
    nom_servicio = models.CharField(max_length=100)
    id_tipo_servicio = models.ForeignKey(TipoServicio, on_delete=models.CASCADE)
    descripcion = models.TextField(blank=True, null=True)
    costo = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    activo = models.BooleanField(null=True, blank=True)

    def __str__(self):
        return self.nom_servicio


class EstatusReservacion(models.Model):
    id_status = models.BigAutoField(primary_key=True)
    nombre_status = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_status

class EstatusHabit(models.Model):
    id_status = models.BigAutoField(primary_key=True)
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.status

class TipoHabitacion(models.Model):
    id_tipo_habitacion = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=50)

class Habitacion(models.Model):
    no_habit = models.BigAutoField(primary_key=True)
    id_status = models.ForeignKey(EstatusHabit, on_delete=models.CASCADE)
    id_tipo_habitacion = models.ForeignKey(TipoHabitacion,on_delete=models.PROTECT)

    def __str__(self):
        return str(self.no_habit)

class Reservaciones(models.Model):
    id_reservacion = models.BigAutoField(primary_key=True)
    id_servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    id_mascota = models.ForeignKey(MascotaBase,null=True, on_delete=models.CASCADE)
    id_empleado = models.ForeignKey(Empleado,null=True, on_delete=models.CASCADE)
    id_dueno = models.ForeignKey(Dueno, on_delete=models.CASCADE)
    id_status = models.ForeignKey(EstatusReservacion, on_delete=models.CASCADE)
    fecha_reservacion = models.DateField()
    hora_inicio = models.TimeField(null=True, blank=True)
    costo_final = models.DecimalField(max_digits=10, decimal_places=2)
    observaciones = models.TextField(blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return f"Reservación {self.id_reservacion}"

class ReservacionDuracion(models.Model):
    id_reservacion = models.OneToOneField(Reservaciones, on_delete=models.CASCADE, primary_key=True)
    duracion_minutos = models.IntegerField()
    hora_fin = models.TimeField(null=True, blank=True)
    
    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(duracion_minutos__gt=0),
                name='duracion_check2'
            )
        ]

class ReservacionHotel(models.Model):
    id_reservacion = models.OneToOneField(Reservaciones, on_delete=models.CASCADE, primary_key=True)
    no_habit = models.ForeignKey(Habitacion, on_delete=models.CASCADE)
    fecha_checkin = models.DateTimeField(null=True, blank=True)
    fecha_checkout = models.DateTimeField(null=True, blank=True)
    fecha_checkin_prevista = models.DateField()
    fecha_checkout_prevista = models.DateField()
    noches_programadas = models.IntegerField(null=True, blank=True)
    
    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(fecha_checkout__isnull=True) | 
                       models.Q(fecha_checkout__gte=models.F('fecha_checkin')),
                name='checkout_check2'
            ),
            models.CheckConstraint(
                check=models.Q(fecha_checkout_prevista__gt=models.F('fecha_checkin_prevista')),
                name='tiempo_check2'
            )
        ]

class BitacoraPaseo(models.Model):
    id_paseo = models.BigAutoField(primary_key=True)
    id_reservacion = models.ForeignKey(Reservaciones, on_delete=models.CASCADE)
    fecha = models.DateField(null=True, blank=True)
    ruta = models.TextField()
    distancia = models.IntegerField(null=True, blank=True)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()
    observaciones = models.TextField(blank=True, null=True)
    duracion_minutos=models.IntegerField(blank=True,null=True)
    kilometros = models.DecimalField(max_digits=5,decimal_places=2,blank=True,null=True)

    def save(self, *args, **kwargs):
        # Auto-calcular duración si no está definida
        if not self.duracion_minutos and self.hora_inicio and self.hora_fin:
            from datetime import datetime
            inicio = datetime.combine(datetime.today(), self.hora_inicio)
            fin = datetime.combine(datetime.today(), self.hora_fin)
            self.duracion_minutos = int((fin - inicio).total_seconds() / 60)
        
        # Si no hay fecha, usar la de la reservación
        if not self.fecha and self.id_reservacion:
            self.fecha = self.id_reservacion.fecha_reservacion
            
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Paseo {self.id_paseo}"
    
#Agregadas
class LimpiezaHabitacion(models.Model):  
    id_limpieza = models.BigAutoField(primary_key=True)
    no_habit = models.ForeignKey(Habitacion, on_delete=models.CASCADE)
    id_empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()
    observaciones = models.TextField(blank=True, null=True)