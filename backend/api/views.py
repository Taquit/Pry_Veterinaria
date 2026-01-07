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



#Consulta 1
@api_view(["GET"])
@permission_classes([AllowAny])  
def habitaciones_con_ocupantes(request):
    """
    Endpoint para obtener el reporte de habitaciones con ocupantes.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        h.no_habit,
                        eh.status AS estado_habitacion,
                        mb.nombre AS nombre_mascota,
                        s.nom_subtipo AS especie,
                        mf.tamaño,
                        d.nombre || ' ' || d.apellido_Pat AS nombre_dueño
                    FROM Habitacion h
                    JOIN Estatus_Habit eh ON h.id_status = eh.id_status
                    JOIN Reservacion_Hotel rh ON h.no_habit = rh.no_habit
                    JOIN Reservaciones r ON rh.id_reservacion = r.id_reservacion
                    JOIN Mascota_Base mb ON r.id_mascota = mb.id_mascota
                    JOIN Subtipo s ON mb.id_subtipo = s.id_subtipo
                    JOIN Dueno d ON mb.id_Duno = d.id_Duno
                    LEFT JOIN Mascota_Fisica mf ON mb.id_mascota = mf.id_mascota
                    WHERE rh.fecha_checkin IS NOT NULL AND rh.fecha_checkout IS NULL;
                """
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        # Capturamos el error detallado
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    

@api_view(["GET"])
@permission_classes([AllowAny])  
def habitaciones_con_ocupantes(request):
    """
    Endpoint para obtener el reporte de habitaciones ocupadas con fecha de salida prevista para hoy.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        mb.nombre AS mascota,
                        rh.no_habit,
                        rh.fecha_checkout_prevista
                    FROM Reservacion_Hotel rh
                    JOIN Reservaciones r ON rh.id_reservacion = r.id_reservacion
                    JOIN Mascota_Base mb ON r.id_mascota = mb.id_mascota
                    WHERE DATE(rh.fecha_checkout_prevista) = CURRENT_DATE;
                """
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    

@api_view(["GET"])
@permission_classes([AllowAny])  
def paseos_por_cuidador(request):
    """
    Endpoint para obtener los paseos realizados por un cuidador en un rango de fechas específico.
    """
    try:
        # Obtener el ID del cuidador y el rango de fechas de los parámetros de la consulta (si es necesario)
        cuidador_id = request.query_params.get('cuidador_id', 1)  # Valor por defecto = 1
        fecha_inicio = request.query_params.get('fecha_inicio', '2023-01-01')
        fecha_fin = request.query_params.get('fecha_fin', '2023-12-31')

        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        e.nombre || ' ' || e.apellido_pat AS cuidador,
                        bp.id_paseo,
                        r.fecha_reservacion,
                        bp.hora_inicio,
                        bp.hora_fin
                    FROM Bitacora_Paseo bp
                    JOIN Reservaciones r ON bp.id_reservacion = r.id_reservacion
                    JOIN Empleado e ON r.id_empleado = e.id_empleado
                    WHERE e.id_empleado = %s
                      AND r.fecha_reservacion BETWEEN %s AND %s;
                """, [cuidador_id, fecha_inicio, fecha_fin]
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_vacunas_vigentes(request):
    """
    Endpoint para obtener las mascotas con vacunas vigentes.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT DISTINCT mb.nombre
                    FROM Mascota_Base mb
                    JOIN Mascota_Vacuna mv ON mb.id_mascota = mv.id_mascota
                    JOIN Vacuna v ON mv.id_vacuna = v.id_vacuna
                    WHERE (mv.fecha_aplicacion + (v.vigencia_dias || ' days')::interval) >= CURRENT_DATE;
                """
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(["GET"])
@permission_classes([AllowAny])
def reporte_servicios_por_rubro(request):
    """
    Endpoint para obtener el reporte de servicios por rubro (tipo de servicio) de una mascota.
    """
    try:
        # Obtener el ID de la mascota de los parámetros de consulta (por defecto 1)
        mascota_id = request.query_params.get('mascota_id', 1)  # Valor por defecto = 1
        
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        ts.nombre_tipo AS rubro,
                        COUNT(r.id_servicio) AS cantidad_servicios,
                        s.costo AS monto_unidad,
                        SUM(r.costo_final) AS total_por_rubro
                    FROM Reservaciones r
                    JOIN Servicio s ON r.id_servicio = s.id_servicio
                    JOIN Tipo_Servicio ts ON s.id_tipo_servicio = ts.id_tipo_servicio
                    WHERE r.id_mascota = %s
                    GROUP BY ts.nombre_tipo, s.costo;
                """, [mascota_id]
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    

@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_a_checkin(request):
    """
    Endpoint para obtener las mascotas cuya fecha de entrada prevista es hoy, pero que no han realizado el check-in.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT mb.nombre, rh.fecha_checkin_prevista
                    FROM Reservacion_Hotel rh
                    JOIN Reservaciones r ON rh.id_reservacion = r.id_reservacion
                    JOIN Mascota_Base mb ON r.id_mascota = mb.id_mascota
                    WHERE rh.fecha_checkin_prevista = CURRENT_DATE 
                      AND rh.fecha_checkin IS NULL;
                """
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(["GET"])
@permission_classes([AllowAny])
def paseos_por_mascota(request):
    """
    Endpoint para obtener el reporte de paseos realizados por un paseador para una mascota específica.
    """
    try:
        # Obtener el ID de la mascota de los parámetros de consulta (por defecto 1)
        mascota_id = request.query_params.get('mascota_id', 1)  # Valor por defecto = 1
        
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        e.nombre AS paseador,
                        r.fecha_reservacion AS fecha,
                        bp.hora_inicio,
                        bp.hora_fin,
                        bp.observaciones AS descripcion,
                        (bp.hora_fin - bp.hora_inicio) AS duracion_total
                    FROM Bitacora_Paseo bp
                    JOIN Reservaciones r ON bp.id_reservacion = r.id_reservacion
                    JOIN Empleado e ON r.id_empleado = e.id_empleado
                    WHERE r.id_mascota = %s;
                """, [mascota_id]
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(["GET"])
@permission_classes([AllowAny])
def servicios_por_mascota(request):
    """
    Endpoint para obtener el reporte de servicios realizados para una mascota específica.
    """
    try:
        # Obtener el ID de la mascota de los parámetros de consulta (por defecto 1)
        mascota_id = request.query_params.get('mascota_id', 1)  # Valor por defecto = 1
        
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        r.fecha_reservacion AS fecha,
                        r.hora_inicio AS hora,
                        e.id_empleado,
                        e.nombre || ' ' || e.apellido_pat AS nombre_empleado,
                        ts.nombre_tipo AS tipo_servicio,
                        s.nom_servicio AS nombre_servicio
                    FROM Reservaciones r
                    JOIN Empleado e ON r.id_empleado = e.id_empleado
                    JOIN Servicio s ON r.id_servicio = s.id_servicio
                    JOIN Tipo_Servicio ts ON s.id_tipo_servicio = ts.id_tipo_servicio
                    WHERE r.id_mascota = %s
                    ORDER BY r.fecha_reservacion, r.hora_inicio;
                """, [mascota_id]
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(["GET"])
@permission_classes([AllowAny])
def reporte_servicios_mensuales(request):
    """
    Endpoint para obtener el reporte de servicios mensuales en 2023, clasificados por tipo de servicio.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT 
                        TO_CHAR(fecha_reservacion, 'Month') AS mes,
                        COUNT(*) FILTER (WHERE s.nom_servicio ILIKE '%paseo%') AS total_paseos,
                        COUNT(*) FILTER (WHERE ts.nombre_tipo ILIKE '%veterinario%') AS total_medicos,
                        COUNT(*) FILTER (WHERE s.nom_servicio ILIKE '%masaje%') AS total_masajes,
                        COUNT(*) FILTER (WHERE s.nom_servicio ILIKE '%corte%') AS total_estetica
                    FROM Reservaciones r
                    JOIN Servicio s ON r.id_servicio = s.id_servicio
                    JOIN Tipo_Servicio ts ON s.id_tipo_servicio = ts.id_tipo_servicio
                    WHERE EXTRACT(YEAR FROM fecha_reservacion) = 2023
                    GROUP BY mes, EXTRACT(MONTH FROM fecha_reservacion)
                    ORDER BY EXTRACT(MONTH FROM fecha_reservacion);
                """
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(["GET"])
@permission_classes([AllowAny])
def mascotas_con_todos_servicios(request):
    """
    Endpoint para obtener las mascotas que han recibido servicios de SPA, Estética y Veterinario.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                    SELECT mb.nombre
                    FROM Mascota_Base mb
                    JOIN Reservaciones r ON mb.id_mascota = r.id_mascota
                    JOIN Servicio s ON r.id_servicio = s.id_servicio
                    JOIN Tipo_Servicio ts ON s.id_tipo_servicio = ts.id_tipo_servicio
                    WHERE ts.nombre_tipo IN ('SPA', 'Estética', 'Veterinario')
                    GROUP BY mb.id_mascota, mb.nombre
                    HAVING COUNT(DISTINCT ts.nombre_tipo) = 3;
                """
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

            return Response(
                {"count": len(data), "results": data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response(
            {"detail": "Error en la consulta", "error": str(err)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )