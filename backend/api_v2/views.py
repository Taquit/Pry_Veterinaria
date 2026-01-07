from django.db import connection
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import *
from .serializers import *

# --- Catálogos de Salud Animal ---
class TipoViewSet(viewsets.ModelViewSet):
    queryset = Tipo.objects.all()
    serializer_class = TipoSerializer

class SubtipoViewSet(viewsets.ModelViewSet):
    queryset = Subtipo.objects.all()
    serializer_class = SubtipoSerializer

class SubtipoMamiferoViewSet(viewsets.ModelViewSet):
    queryset = SubtipoMamifero.objects.all()
    serializer_class = SubtipoMamiferoSerializer

class SubtipoExoticoViewSet(viewsets.ModelViewSet):
    queryset = SubtipoExotico.objects.all()
    serializer_class = SubtipoExoticoSerializer

class CatalogoEdadPredispuestaViewSet(viewsets.ModelViewSet):
    queryset = CatalogoEdadPredispuesta.objects.all()
    serializer_class = CatalogoEdadPredispuestaSerializer

class CatalogoSexoViewSet(viewsets.ModelViewSet):
    queryset = CatalogoSexo.objects.all()
    serializer_class = CatalogoSexoSerializer

class CatalogoPatronViewSet(viewsets.ModelViewSet):
    queryset = CatalogoPatron.objects.all()
    serializer_class = CatalogoPatronSerializer

class CatalogoSeveridadViewSet(viewsets.ModelViewSet):
    queryset = CatalogoSeveridad.objects.all()
    serializer_class = CatalogoSeveridadSerializer

class CatalogoTipoVacunaViewSet(viewsets.ModelViewSet):
    queryset = CatalogoTipoVacuna.objects.all()
    serializer_class = CatalogoTipoVacunaSerializer

# --- Catálogos de Color ---
class ColorViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class TipoColorViewSet(viewsets.ModelViewSet):
    queryset = TipoColor.objects.all()
    serializer_class = TipoColorSerializer

# --- Catálogos de Gravedad e Importancia ---
class NivelGravedadViewSet(viewsets.ModelViewSet):
    queryset = NivelGravedad.objects.all()
    serializer_class = NivelGravedadSerializer

class NivelImportanciaViewSet(viewsets.ModelViewSet):
    queryset = NivelImportancia.objects.all()
    serializer_class = NivelImportanciaSerializer

# --- Tipos de Alergias y Enfermedades ---
class TipoEnfermedadViewSet(viewsets.ModelViewSet):
    queryset = TipoEnfermedad.objects.all()
    serializer_class = TipoEnfermedadSerializer

class TipoAlergiasViewSet(viewsets.ModelViewSet):
    queryset = TipoAlergias.objects.all()
    serializer_class = TipoAlergiasSerializer

# --- Salud y Enfermedades ---
class EnfermedadViewSet(viewsets.ModelViewSet):
    queryset = Enfermedad.objects.all()
    serializer_class = EnfermedadSerializer

class AlergiaViewSet(viewsets.ModelViewSet):
    queryset = Alergia.objects.all()
    serializer_class = AlergiaSerializer

# --- Vacunas ---
class VacunaViewSet(viewsets.ModelViewSet):
    queryset = Vacuna.objects.all()
    serializer_class = VacunaSerializer

class VacunaPrevieneEnfermedadViewSet(viewsets.ModelViewSet):
    queryset = VacunaPrevieneEnfermedad.objects.all()
    serializer_class = VacunaPrevieneEnfermedadSerializer

# --- Información Geográfica ---
class EstadoViewSet(viewsets.ModelViewSet):
    queryset = Estado.objects.all()
    serializer_class = EstadoSerializer

class MunicipioViewSet(viewsets.ModelViewSet):
    queryset = Municipio.objects.all()
    serializer_class = MunicipioSerializer

class CodigoPostalViewSet(viewsets.ModelViewSet):
    queryset = CodigoPostal.objects.all()
    serializer_class = CodigoPostalSerializer

class TipoAsentamientoViewSet(viewsets.ModelViewSet):
    queryset = TipoAsentamiento.objects.all()
    serializer_class = TipoAsentamientoSerializer

class AsentamientoViewSet(viewsets.ModelViewSet):
    queryset = Asentamiento.objects.all()
    serializer_class = AsentamientoSerializer

# --- Domicilios y Contactos ---
class DomicilioViewSet(viewsets.ModelViewSet):
    queryset = Domicilio.objects.all()
    serializer_class = DomicilioSerializer

class DuenoViewSet(viewsets.ModelViewSet):
    queryset = Dueno.objects.all()
    serializer_class = DuenoSerializer

class ContactoEmergenciaViewSet(viewsets.ModelViewSet):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer

# --- Empleados ---
class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

# --- Mascotas ---
class MascotaBaseViewSet(viewsets.ModelViewSet):
    queryset = MascotaBase.objects.all()
    serializer_class = MascotaBaseSerializer

class MascotaIdentificacionViewSet(viewsets.ModelViewSet):
    queryset = MascotaIdentificacion.objects.all()
    serializer_class = MascotaIdentificacionSerializer

class MascotaFisicaViewSet(viewsets.ModelViewSet):
    queryset = MascotaFisica.objects.all()
    serializer_class = MascotaFisicaSerializer

class MascotaColorViewSet(viewsets.ModelViewSet):
    queryset = MascotaColor.objects.all()
    serializer_class = MascotaColorSerializer

# --- Salud de Mascotas ---
class MascotaEnfermedadViewSet(viewsets.ModelViewSet):
    queryset = MascotaEnfermedad.objects.all()
    serializer_class = MascotaEnfermedadSerializer

class MascotaAlergiasViewSet(viewsets.ModelViewSet):
    queryset = MascotaAlergias.objects.all()
    serializer_class = MascotaAlergiasSerializer

class MascotaVacunaViewSet(viewsets.ModelViewSet):
    queryset = MascotaVacuna.objects.all()
    serializer_class = MascotaVacunaSerializer

class MascotaSaludViewSet(viewsets.ModelViewSet):
    queryset = MascotaSalud.objects.all()
    serializer_class = MascotaSaludSerializer

# --- Servicios y Reservaciones ---
class TipoServicioViewSet(viewsets.ModelViewSet):
    queryset = TipoServicio.objects.all()
    serializer_class = TipoServicioSerializer

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class EstatusReservacionViewSet(viewsets.ModelViewSet):
    queryset = EstatusReservacion.objects.all()
    serializer_class = EstatusReservacionSerializer

class EstatusHabitViewSet(viewsets.ModelViewSet):
    queryset = EstatusHabit.objects.all()
    serializer_class = EstatusHabitSerializer

class HabitacionViewSet(viewsets.ModelViewSet):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer

class ReservacionesViewSet(viewsets.ModelViewSet):
    queryset = Reservaciones.objects.all()
    serializer_class = ReservacionesSerializer

class ReservacionDuracionViewSet(viewsets.ModelViewSet):
    queryset = ReservacionDuracion.objects.all()
    serializer_class = ReservacionDuracionSerializer

class ReservacionHotelViewSet(viewsets.ModelViewSet):
    queryset = ReservacionHotel.objects.all()
    serializer_class = ReservacionHotelSerializer

class BitacoraPaseoViewSet(viewsets.ModelViewSet):
    queryset = BitacoraPaseo.objects.all()
    serializer_class = BitacoraPaseoSerializer


@api_view(["GET"])
@permission_classes([AllowAny])
def habitaciones_ocupadas_actualmente(request):
    """
    Consulta 1: Habitaciones ocupadas actualmente
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    h.no_habit,
                    eh.status AS estado_habitacion,
                    mb.nombre AS nombre_mascota,
                    s.nom_subtipo AS especie,
                    mf.tamano,
                    d.nombre || ' ' || "d.apellido_Pat" || ' ' || "d.apellido_Mat AS" nombre_dueño
                FROM api_v2_habitacion h
                JOIN api_v2_estatushabit eh ON h.id_status_id = eh.id_status
                JOIN api_v2_reservacionhotel rh ON h.no_habit = rh.no_habit_id
                JOIN api_v2_reservaciones r ON rh.id_reservacion_id = r.id_reservacion
                JOIN api_v2_mascotabase mb ON r.id_mascota_id = mb.id_mascota
                JOIN api_v2_subtipo s ON mb.id_subtipo_id = s.id_subtipo
                JOIN api_v2_dueno d ON mb.id_dueno_id = d.id_dueno
                LEFT JOIN api_v2_mascotafisica mf ON mb.id_mascota = mf.id_mascota_id
                WHERE rh.fecha_checkin IS NOT NULL 
                AND rh.fecha_checkout IS NULL;
            """)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_salen_hoy(request):
    """
    Consulta 2: Mascotas que salen hoy
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    mb.nombre AS mascota,
                    rh.no_habit_id as habitacion,
                    rh.fecha_checkout_prevista
                FROM api_v2_reservacionhotel rh
                JOIN api_v2_reservaciones r ON rh.id_reservacion_id = r.id_reservacion
                JOIN api_v2_mascotabase mb ON r.id_mascota_id = mb.id_mascota
                WHERE DATE(rh.fecha_checkout_prevista) = CURRENT_DATE;
            """)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def paseos_por_cuidador(request):
    """
    Consulta 3: Paseos por cuidador en periodo
    """
    try:
        cuidador_id = request.GET.get('cuidador_id', 1)
        fecha_inicio = request.GET.get('fecha_inicio', '2023-01-01')
        fecha_fin = request.GET.get('fecha_fin', '2023-12-31')
        
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    e.nombre || ' ' || e.apellido_pat AS cuidador,
                    bp.id_paseo,
                    r.fecha_reservacion,
                    bp.hora_inicio,
                    bp.hora_fin
                FROM api_v2_bitacorapaseo bp
                JOIN api_v2_reservaciones r ON bp.id_reservacion_id = r.id_reservacion
                JOIN api_v2_empleado e ON r.id_empleado_id = e.id_empleado
                WHERE e.id_empleado = %s
                  AND r.fecha_reservacion BETWEEN %s AND %s;
            """, [cuidador_id, fecha_inicio, fecha_fin])
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_vacunas_vigentes(request):
    """
    Consulta 4: Mascotas con vacunas vigentes
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT DISTINCT mb.nombre
                FROM api_v2_mascotabase mb
                JOIN api_v2_mascotavacuna mv ON mb.id_mascota = mv.id_mascota_id
                JOIN api_v2_vacuna v ON mv.id_vacuna_id = v.id_vacuna
                WHERE (mv.fecha_aplicacion + (v.vigencia_dias || ' days')::interval) >= CURRENT_DATE;
            """)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def reporte_servicios_por_rubro(request):
    """
    Consulta 5: Gastos por rubro de una mascota
    """
    try:
        mascota_id = request.GET.get('mascota_id', 1)
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    ts.nombre_tipo AS rubro,
                    COUNT(r.id_servicio_id) AS cantidad_servicios,
                    s.costo AS monto_unidad,
                    SUM(r.costo_final) AS total_por_rubro
                FROM api_v2_reservaciones r
                JOIN api_v2_servicio s ON r.id_servicio_id = s.id_servicio
                JOIN api_v2_tiposervicio ts ON s.id_tipo_servicio_id = ts.id_tipo_servicio
                WHERE r.id_mascota_id = %s
                GROUP BY ts.nombre_tipo, s.costo;
            """, [mascota_id])
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_a_checkin(request):
    """
    Consulta 6: Mascotas que debían llegar hoy pero no han llegado
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT mb.nombre, rh.fecha_checkin_prevista
                FROM api_v2_reservacionhotel rh
                JOIN api_v2_reservaciones r ON rh.id_reservacion_id = r.id_reservacion
                JOIN api_v2_mascotabase mb ON r.id_mascota_id = mb.id_mascota
                WHERE rh.fecha_checkin_prevista = CURRENT_DATE 
                  AND rh.fecha_checkin IS NULL;
            """)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def paseos_por_mascota(request):
    """
    Consulta 7: Bitácora de paseos de una mascota
    """
    try:
        mascota_id = request.GET.get('mascota_id', 1)
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    e.nombre AS paseador,
                    r.fecha_reservacion AS fecha,
                    bp.hora_inicio,
                    bp.hora_fin,
                    bp.observaciones AS descripcion,
                    (bp.hora_fin - bp.hora_inicio) AS duracion_total
                FROM api_v2_bitacorapaseo bp
                JOIN api_v2_reservaciones r ON bp.id_reservacion_id = r.id_reservacion
                JOIN api_v2_empleado e ON r.id_empleado_id = e.id_empleado
                WHERE r.id_mascota_id = %s;
            """, [mascota_id])
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def servicios_por_mascota(request):
    """
    Consulta 8: Empleados que atendieron a una mascota
    """
    try:
        mascota_id = request.GET.get('mascota_id', 1)
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    r.fecha_reservacion AS fecha,
                    r.hora_inicio AS hora,
                    e.id_empleado,
                    e.nombre || ' ' || e.apellido_pat AS nombre_empleado,
                    ts.nombre_tipo AS tipo_servicio,
                    s.nom_servicio AS nombre_servicio
                FROM api_v2_reservaciones r
                JOIN api_v2_empleado e ON r.id_empleado_id = e.id_empleado
                JOIN api_v2_servicio s ON r.id_servicio_id = s.id_servicio
                JOIN api_v2_tiposervicio ts ON s.id_tipo_servicio_id = ts.id_tipo_servicio
                WHERE r.id_mascota_id = %s
                ORDER BY r.fecha_reservacion, r.hora_inicio;
            """, [mascota_id])
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def reporte_servicios_mensuales(request):
    """
    Consulta 9: Servicios mensuales realizados
    """
    try:
        anio = request.GET.get('anio', 2023)
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    TO_CHAR(fecha_reservacion, 'Month') AS mes,
                    COUNT(*) FILTER (WHERE s.nom_servicio ILIKE '%%paseo%%') AS total_paseos,
                    COUNT(*) FILTER (WHERE ts.nombre_tipo ILIKE '%%veterinario%%') AS total_medicos,
                    COUNT(*) FILTER (WHERE s.nom_servicio ILIKE '%%masaje%%') AS total_masajes,
                    COUNT(*) FILTER (WHERE s.nom_servicio ILIKE '%%corte%%') AS total_estetica
                FROM api_v2_reservaciones r
                JOIN api_v2_servicio s ON r.id_servicio_id = s.id_servicio
                JOIN api_v2_tiposervicio ts ON s.id_tipo_servicio_id = ts.id_tipo_servicio
                WHERE EXTRACT(YEAR FROM fecha_reservacion) = %s
                GROUP BY mes, EXTRACT(MONTH FROM fecha_reservacion)
                ORDER BY EXTRACT(MONTH FROM fecha_reservacion);
            """, [anio])
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_con_todos_servicios(request):
    """
    Consulta 10: Mascotas que visitaron todas las áreas
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT mb.nombre
                FROM api_v2_mascotabase mb
                JOIN api_v2_reservaciones r ON mb.id_mascota = r.id_mascota_id
                JOIN api_v2_servicio s ON r.id_servicio_id = s.id_servicio
                JOIN api_v2_tiposervicio ts ON s.id_tipo_servicio_id = ts.id_tipo_servicio
                WHERE ts.nombre_tipo IN ('SPA', 'Estética', 'Veterinario')
                GROUP BY mb.id_mascota, mb.nombre
                HAVING COUNT(DISTINCT ts.nombre_tipo) = 3;
            """)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)