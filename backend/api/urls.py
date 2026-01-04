from rest_framework.routers import DefaultRouter
from django.urls import path,include
from .views import *

router = DefaultRouter()
router.register(r'tipos', TipoViewSet)
router.register(r'subtipos', SubtipoViewSet)
router.register(r'subtipos_exoticos', Subtipo_ExoticoViewSet)
router.register(r'subtipos_mamiferos', Subtipo_MamiferoViewSet)
router.register(r'vacunas', VacunaViewSet)
router.register(r'mascotas_vacunas', Mascota_VacunaViewSet)
router.register(r'catalogo_cp', CatalogoCPViewSet)
router.register(r'domicilios', DomicilioViewSet)
router.register(r'dueños', DueñoViewSet)
router.register(r'contactos_emergencia', Contacto_emergenciaViewSet)
router.register(r'puestos', PuestoViewSet)
router.register(r'mascotas', MascotaViewSet)
router.register(r'reservaciones', ReservacionViewSet)
router.register(r'servicios', ServicioViewSet)
router.register(r'habitaciones', HabitacionViewSet)

urlpatterns = [
    path("",include(router.urls)),
    path("login/",Login_dueno),
    path("getdom/",Get_dom),
    path("get-info-dom/",Get_info_Dom),
    path("get-mas-by-id/",Get_Mas_by_ID),
    path("get-info-em/",Get_info_Emergencia),

]