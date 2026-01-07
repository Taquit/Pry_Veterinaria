from rest_framework import routers
from django.urls import path, include
from . import views
from .views import *

router = routers.DefaultRouter()

# --- Catálogos de Salud Animal ---
router.register(r'tipos', views.TipoViewSet, basename='tipo')
router.register(r'subtipos', views.SubtipoViewSet, basename='subtipo')
router.register(r'subtipos-mamifero', views.SubtipoMamiferoViewSet, basename='subtipo-mamifero')
router.register(r'subtipos-exotico', views.SubtipoExoticoViewSet, basename='subtipo-exotico')
router.register(r'catalogos-edad-predispuesta', views.CatalogoEdadPredispuestaViewSet, basename='catalogo-edad-predispuesta')
router.register(r'catalogos-sexo', views.CatalogoSexoViewSet, basename='catalogo-sexo')
router.register(r'catalogos-patron', views.CatalogoPatronViewSet, basename='catalogo-patron')
router.register(r'catalogos-severidad', views.CatalogoSeveridadViewSet, basename='catalogo-severidad')
router.register(r'catalogos-tipo-vacuna', views.CatalogoTipoVacunaViewSet, basename='catalogo-tipo-vacuna')

# --- Catálogos de Color ---
router.register(r'colores', views.ColorViewSet, basename='color')
router.register(r'tipos-color', views.TipoColorViewSet, basename='tipo-color')

# --- Catálogos de Gravedad e Importancia ---
router.register(r'niveles-gravedad', views.NivelGravedadViewSet, basename='nivel-gravedad')
router.register(r'niveles-importancia', views.NivelImportanciaViewSet, basename='nivel-importancia')

# --- Tipos de Alergias y Enfermedades ---
router.register(r'tipos-enfermedad', views.TipoEnfermedadViewSet, basename='tipo-enfermedad')
router.register(r'tipos-alergias', views.TipoAlergiasViewSet, basename='tipo-alergias')

# --- Salud y Enfermedades ---
router.register(r'enfermedades', views.EnfermedadViewSet, basename='enfermedad')
router.register(r'alergias', views.AlergiaViewSet, basename='alergia')

# --- Vacunas ---
router.register(r'vacunas', views.VacunaViewSet, basename='vacuna')
router.register(r'vacunas-previenen-enfermedades', views.VacunaPrevieneEnfermedadViewSet, basename='vacuna-previene-enfermedad')

# --- Información Geográfica ---
router.register(r'estados', views.EstadoViewSet, basename='estado')
router.register(r'municipios', views.MunicipioViewSet, basename='municipio')
router.register(r'codigos-postales', views.CodigoPostalViewSet, basename='codigo-postal')
router.register(r'tipos-asentamiento', views.TipoAsentamientoViewSet, basename='tipo-asentamiento')
router.register(r'asentamientos', views.AsentamientoViewSet, basename='asentamiento')

# --- Domicilios y Contactos ---
router.register(r'domicilios', views.DomicilioViewSet, basename='domicilio')
router.register(r'duenos', views.DuenoViewSet, basename='dueno')
router.register(r'contactos-emergencia', views.ContactoEmergenciaViewSet, basename='contacto-emergencia')

# --- Empleados ---
router.register(r'roles', views.RolViewSet, basename='rol')
router.register(r'empleados', views.EmpleadoViewSet, basename='empleado')

# --- Mascotas ---
router.register(r'mascotas-base', views.MascotaBaseViewSet, basename='mascota-base')
router.register(r'mascotas-identificacion', views.MascotaIdentificacionViewSet, basename='mascota-identificacion')
router.register(r'mascotas-fisica', views.MascotaFisicaViewSet, basename='mascota-fisica')
router.register(r'mascotas-color', views.MascotaColorViewSet, basename='mascota-color')

# --- Salud de Mascotas ---
router.register(r'mascotas-enfermedades', views.MascotaEnfermedadViewSet, basename='mascota-enfermedad')
router.register(r'mascotas-alergias', views.MascotaAlergiasViewSet, basename='mascota-alergias')
router.register(r'mascotas-vacunas', views.MascotaVacunaViewSet, basename='mascota-vacuna')
router.register(r'mascotas-salud', views.MascotaSaludViewSet, basename='mascota-salud')

# --- Servicios y Reservaciones ---
router.register(r'tipos-servicio', views.TipoServicioViewSet, basename='tipo-servicio')
router.register(r'servicios', views.ServicioViewSet, basename='servicio')
router.register(r'estatus-reservacion', views.EstatusReservacionViewSet, basename='estatus-reservacion')
router.register(r'estatus-habitacion', views.EstatusHabitViewSet, basename='estatus-habitacion')
router.register(r'habitaciones', views.HabitacionViewSet, basename='habitacion')
router.register(r'reservaciones', views.ReservacionesViewSet, basename='reservacion')
router.register(r'reservaciones-duracion', views.ReservacionDuracionViewSet, basename='reservacion-duracion')
router.register(r'reservaciones-hotel', views.ReservacionHotelViewSet, basename='reservacion-hotel')
router.register(r'bitacoras-paseo', views.BitacoraPaseoViewSet, basename='bitacora-paseo')
 


urlpatterns = [
    path('', include(router.urls)),
    path('reportes/habitaciones-ocupadas/', views.habitaciones_ocupadas_actualmente),
    path('reportes/mascotas-salen-hoy/', views.mascotas_salen_hoy),
    path('reportes/paseos-por-cuidador/', views.paseos_por_cuidador),
    path('reportes/vacunas-vigentes/', views.mascotas_vacunas_vigentes),
    path('reportes/gastos-por-mascota/', views.reporte_servicios_por_rubro),
    path('reportes/mascotas-sin-checkin/', views.mascotas_a_checkin),
    path('reportes/paseos-por-mascota/', views.paseos_por_mascota),
    path('reportes/servicios-por-mascota/', views.servicios_por_mascota),
    path('reportes/servicios-mensuales/', views.reporte_servicios_mensuales),
    path('reportes/mascotas-todas-areas/', views.mascotas_con_todos_servicios),
]