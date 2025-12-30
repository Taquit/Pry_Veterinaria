from django.db import models

# Create your models here.

#Modelo Tipo-Subtipo
class Tipo(models.Model):
    id_tipo = models.BigAutoField(primary_key=True)
    tipo = models.CharField(max_length=100)

class Subtipo(models.Model):

    id_subtipo = models.BigAutoField(primary_key=True)
    id_tipo = models.ForeignKey(
            'Tipo',
            on_delete=models.CASCADE,
            db_column='id_tipo'
    )
    nom_subtipo = models.CharField(max_length=100)
    esp_vidamin = models.IntegerField()
    esp_vidamax = models.IntegerField()
    desc_subtipo = models.TextField()


class Subtipo_exotico(models.Model):
    
    id_subtipo = models.OneToOneField(
            'Subtipo',
            on_delete=models.CASCADE,
            primary_key=True,
            db_column='id_subtipo'
    )
    min_size = models.IntegerField()
    max_size = models.IntegerField()
    nivel_interaccion = models.CharField(max_length=50)

class Subtipo_Mamifero(models.Model):

    id_subtipo = models.OneToOneField(
            'Subtipo',
            on_delete=models.CASCADE,
            primary_key=True,
            db_column='id_subtipo'
    )
    peso_min = models.FloatField()
    peso_max = models.FloatField()
    size_subtipo = models.CharField(max_length=50)

#Modelo Vacuna/Mascota_Vacuna
class Vacuna(models.Model):

    id_vacuna = models.BigAutoField(primary_key=True)
    id_tipo = models.ForeignKey(
            'Tipo',
            on_delete=models.CASCADE,
            db_column='id_tipo'
    )
    nombre_vac = models.CharField(max_length=100)
    via_admin = models.CharField(max_length=50)
    importancia = models.CharField(max_length=100)
    tiempo_min = models.IntegerField()
    tiempo_max = models.IntegerField()

class Mascota_Vacuna(models.Model):

    id_aplicacion = models.BigAutoField(primary_key=True)
    id_vac = models.ForeignKey(
        'id_vacuna',
        on_delete=models.PROTECT,
        db_column='id_vacuna'
    )
    id_mascota = models.ForeignKey(
        'Mascota',
        on_delete=models.PROTECT,
        db_column='id_mascota'
    )
    fecha_aplicacion = models.DateTimeField(auto_now_add=True)


#Modelo Domicilio/CatalogoCP
class CatalogoCP(models.Model):

    id=models.BigAutoField(primary_key = True)
    codigoP = models.CharField(max_length=5)
    id_asenta = models.IntegerField()
    d_asenta = models.CharField(max_length=200)
    d_tipo_asenta = models.CharField(max_length=50)
    d_mnpio = models.CharField(max_length=100)
    d_estado = models.CharField(max_length=100)
    id_estado = models.CharField(max_length=5)
    id_tipo_asenta = models.CharField(max_length=5)
    id_mnpio = models.IntegerField()

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['codigoP', 'id_asenta'], name='unique_cp_asenta')
        ]

        indexes = [
            models.Index(fields=['codigoP'], name='codigoP_idx'),
            models.Index(fields=['codigoP', 'id_asenta'], name='cp_asenta_idx'),
        ]

class Domicilio(models.Model):

    id_domicilio = models.BigAutoField(primary_key = True)
    catalogo = models.ForeignKey(
            'CatalogoCP',
            on_delete=models.PROTECT,
            db_column='catalogo_id'
    )

    nom_calle = models.CharField(max_length=150)
    num_ext = models.CharField(max_length=10)
    num_int = models.CharField(max_length=10, blank=True, null=True)
    
    class Meta:
        indexes = [
            models.Index(fields=['catalogo'], name='domicilio_cp_asenta_idx'),
        ]

#Modelo Mascota/Dueño
class Dueño(models.Model):

    id_dueño = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_p = models.CharField(max_length=100)
    apellido_m = models.CharField(max_length=100, blank=True, null=True)
    telefono = models.CharField(max_length=15)
    email = models.EmailField(max_length=100, blank=True, null=True)
    contraseña = models.Charfield(max_length=100)
    id_domicilio = models.ForeignKey(
            'Domicilio',
            on_delete=models.PROTECT,
            db_column='id_domicilio'
    )
    id_contacto= models.ForeignKey(
            'Contacto_emergencia',
            on_delete=models.PROTECT,
            db_column='id_contacto',
    )


class Contacto_emergencia(models.Model):

    id_contacto = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_p = models.CharField(max_length=100)
    apellido_m = models.CharField(max_length=100)
    telefono_contacto = models.CharField(max_length=15)
    correo = models.EmailField(max_length=100)

class Mascota(models.Model):
    id_mascota = models.BigAutoField(primary_key=True)
    nombre_mascota = models.CharField(max_length=100)
    edad = models.IntegerField()
    peso = models.FloatField()
    esterilizado =  models.BooleanField()
    chip = models.CharField(max_length=50, unique=True)
    ruac = models.CharField(max_length=50, unique=True, null=True)
    sexo = models.CharField(max_length=1)
    color_prim = models.CharField(max_length=50)
    color_sec = models.CharField(max_length=50, blank=True, null=True)
    comportamiento = models.CharField(max_length=200, blank=True, null=True)
    cartilla_vac = models.BooleanField()
    notas = models.TextField(blank=True, null=True)

#Empleados
class Puesto(models.Model):
    id_puesto= models.BigAutoField(primary_key=True)
    puesto = models.CharField(max_length=20)
    desc = models.CharField(max_length=255)

class Empleado(models.Model):

    id_empleado = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido_p = models.CharField(max_length=100)
    apellido_m = models.CharField(max_length=100, blank=True, null=True)
    puesto = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)
    email = models.EmailField(max_length=100, blank=True, null=True)
    contrasena = models.CharField(max_length=100)
    id_puesto = models.ForeignKey(
            'Puesto',
            on_delete=models.PROTECT,
            db_column= 'id_puesto'
    )


#Servicios
class Habitacion(models.Model):

    no_habit = models.BigAutoField(primary_key= True)
    estatus = models.CharField(max_length=50)
    costo = models.FloatField()
    desc = models.TextField

class  Servicio(models.Model):

    id_servicio = models.BigAutoField(primary_key= True)
    servicio = models.CharField(max_length=20)
    costo = models.FloatField()
    desc = models.CharField(max_length=255)

#Reservaciones
class Reservacion_(models.Model):
    id_reservacion = models.BigAutoField(primary_key=True)
    checke_in = models.DateTimeField()
    checke_out = models.DateTimeField()
    estatus = models.CharField(max_length=50)
    id_dueño = models.ForeignKey(
            'Dueño', 
            on_delete=models.PROTECT,
            db_column='id_dueño'
    )
    id_mascota = models.ForeignKey(
            'Mascota',
            on_delete=models.PROTECT,
            db_column='id_mascota'
    )

class Reservacion_Servicio(models.Model):

    id_res_serv = models.BigAutoField(primary_key=True)
    precio_total = models.FloatField()
    estatus = models.CharField(max_length=50)
    notas = models.TextField(blank=True, null=True)
    id_reservacion = models.ForeignKey(
            'Reservacion_',
            on_delete=models.PROTECT,
            db_column='id_reservacion'
    )
    id_empleado = models.ForeignKey(
            'Empleado',
            on_delete=models.PROTECT,
            db_column='id_empleado'
    )
    no_habit = models.ForeignKey(
            'Habitacion',
            on_delete=models.PROTECT,
            db_column='no_habit'
    )
