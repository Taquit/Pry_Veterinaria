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

@api_view(["POST"])
@permission_classes([AllowAny])
def user_login(request):
    """
    Endpoint de login 
    """
    correo=request.data.get('correo')
    contra=request.data.get('contra')
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT 
                dn.id_dueno
                FROM api_v2_dueno dn
                WHERE dn.correo = %s AND dn.contra = %s;
                """,[correo,contra]
            )
            row = cursor.fetchone()
            if row:
                return Response({"detail": "Login exitoso", "id_dueno": row[0]}, status=status.HTTP_200_OK)
            else:
                return Response({"detail": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)
    
@api_view(["POST"])
@permission_classes([AllowAny])
def get_info_dueno(request):
    """
    endpoint para obtener la información del dueño
    """
    id=request.data.get('id_dueno')
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT 
                dn.nombre,
                dn.apellido_pat,
                dn.apellido_mat,
                dn.telefono,
                dn.correo,
                dn.id_domicilio
                FROM api_v2_dueno dn
                WHERE dn.id_dueno = %s;
                """,[id]
            )
            row = cursor.fetchone()
            if row:
                nombre,apellido_pat,apellido_mat,telefono,correo,id_domicilio=row
                return Response({
                    "ok":True,
                    "nombre":nombre,
                    "apellido_pat":apellido_pat,
                    "apellido_mat":apellido_mat,
                    "telefono":telefono,
                    "correo":correo,
                    "id_domicilio":id_domicilio
                }, status=status.HTTP_200_OK)
            else:
                return Response({"detail": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)
    
@api_view(["POST"])
@permission_classes([AllowAny])
def get_full_adress(request):
    """
    endpoint para obtener la información del domicilio completo
    """
    try:
        with connection.cursor() as cursor:
            id_domicilio=request.data.get('id_domicilio')
            cursor.execute(
                """
                SELECT 
                d.nom_calle,
                d.num_calleext,
                d.num_calleint,
                d.id_asenta,
                a.d_asenta,
                ta.d_tipo_asenta,
                cp.codigop,
                m.d_mnpio,
                e.d_estado
                FROM api_v2_domicilio d
                JOIN api_v2_asentamiento a ON d.id_asenta = a.id_asenta
                JOIN api_v2_tipoasentamiento ta ON a.id_tipo_asenta = ta.id_tipo_asenta
                JOIN api_v2_codigopostal cp ON a.codigop = cp.codigop
                JOIN api_v2_municipio m ON cp.id_mnpio_id = m.id_mnpio
                JOIN api_v2_estado e ON m.id_estado = e.id_estado
                WHERE d.id_domicilio = %s;
                """,[id_domicilio]
            )
            row = cursor.fetchone()
            if row:
                calle,no_exterior,no_interior,id_asentamiento,nombre_asentamiento,tipo_asentamiento,codigo_postal,nom_municipio,nom_estado=row
                return Response({
                    "ok":True,
                    "calle":calle,
                    "no_exterior":no_exterior,
                    "no_interior":no_interior,
                    "id_asentamiento":id_asentamiento,
                    "nombre_asentamiento":nombre_asentamiento,
                    "tipo_asentamiento":tipo_asentamiento,
                    "codigo_postal":codigo_postal,
                    "nom_municipio":nom_municipio,
                    "nom_estado":nom_estado
                }, status=status.HTTP_200_OK)
            else:
                return Response({"detail": "Domicilio no encontrado"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["POST"])
@permission_classes([AllowAny])
def get_mas_by_dueno(request):
    """
    endpoint para obtener todas las mascotas de un dueño
    """
    try:
        with connection.cursor() as cursor:
            id_dueño=request.data.get('id_dueno')
            cursor.execute(
                """
                SELECT 
                mb.id_mascota,
                mb.nombre,
                mb.id_subtipo,
                s.nom_subtipo AS nom_subtipo
                FROM api_v2_mascotabase mb
                LEFT JOIN api_v2_subtipo s ON mb.id_subtipo = s.id_subtipo
                WHERE mb.id_dueno = %s;
                """,[id_dueño]
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)
    
@api_view(["POST"])
@permission_classes([AllowAny])
def get_contacto_em(request):
    """
    endpoint para obtener el contacto de emergencia de un dueño
    """
    try:
        with connection.cursor() as cursor:
            id_dueño=request.data.get('id_dueno')
            cursor.execute(
                """
                SELECT 
                ce.nombre,
                ce.apellido_pat,
                ce.apellido_mat,
                ce.telefono,
                FROM api_v2_contactoemergencia ce
                WHERE ce.id_dueno = %s;
                """,[id_dueño]
            )
            row = cursor.fetchone()
            if row:
                nombre,apellido_pat,apellido_mat,telefono,relacion=row
                return Response({
                    "ok":True,
                    "nombre":nombre,
                    "apellido_pat":apellido_pat,
                    "apellido_mat":apellido_mat,
                    "telefono":telefono,
                }, status=status.HTTP_200_OK)
            else:
                return Response({"detail": "Contacto no encontrado"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)    

@api_view(["POST"])
@permission_classes([AllowAny])
def get_mas_by_dueno(request):
    """
    endpoint para obtener todas las mascotas de un dueño
    """
    try:
        with connection.cursor() as cursor:
            id_dueño=request.data.get('id_dueño')
            cursor.execute(
                """
                SELECT 
                mb.id_mascota,
                mb.nombre,
                mb.id_subtipo,
                s.nom_subtipo AS nom_subtipo
                FROM api_v2_mascotabase mb
                LEFT JOIN api_v2_subtipo s ON mb.id_subtipo = s.id_subtipo
                WHERE mb.id_dueno = %s;
                """,[id_dueño]
            )
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

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
                    d.nombre || ' ' || d.apellido_pat || ' ' || d.apellido_mat AS nombre_dueño
                FROM api_v2_habitacion h
                JOIN api_v2_estatushabit eh ON h.id_status_id = eh.id_status
                JOIN api_v2_reservacionhotel rh ON h.no_habit = rh.no_habit_id
                JOIN api_v2_reservaciones r ON rh.id_reservacion_id = r.id_reservacion
                JOIN api_v2_mascotabase mb ON r.id_mascota_id = mb.id_mascota
                JOIN api_v2_subtipo s ON mb.id_subtipo = s.id_subtipo
                JOIN api_v2_dueno d ON mb.id_dueno = d.id_dueno
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

Tipo

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
                    rh.no_habit_id AS habitacion,
                    rh.fecha_checkout_prevista,
                    du.nombre || ' ' || du.apellido_pat || ' ' || du.apellido_mat AS nombre_dueño,
                    du.telefono AS telefono_dueño,
                    mb.id_subtipo,
                    sub.nom_subtipo AS nom_subtipo
                FROM api_v2_reservacionhotel rh
                JOIN api_v2_reservaciones r ON rh.id_reservacion_id = r.id_reservacion
                JOIN api_v2_mascotabase mb ON r.id_mascota_id = mb.id_mascota
                LEFT JOIN api_v2_dueno du ON mb.id_dueno = du.id_dueno
                LEFT JOIN api_v2_subtipo sub ON mb.id_subtipo = sub.id_subtipo
                WHERE DATE(rh.fecha_checkout_prevista) = CURRENT_DATE;
            """)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
            return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=500)

@api_view(["POST"])
@permission_classes([AllowAny])
def paseos_por_cuidador(request):
    """
    Consulta 3: Paseos realizados por un cuidador en un rango de fechas (recibiendo parámetros JSON)
    """
    try:
        # Obtener parámetros del cuerpo de la solicitud
        cuidador_id = request.data.get('cuidador_id', 1)  # Valor por defecto: 1
        fecha_inicio = request.data.get('fecha_inicio', '2023-01-01')
        fecha_fin = request.data.get('fecha_fin', '2023-12-31')

        # Consulta SQL corregida con LATERAL JOIN
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT 
                    e.id_empleado,
                    e.nombre || ' ' || e.apellido_pat AS nombre_cuidador,
                    bp.id_paseo,
                    r.fecha_reservacion AS fecha,
                    bp.hora_inicio,
                    bp.hora_fin,
                    bp.duracion_minutos AS duracion,
                    bp.ruta,
                    bp.observaciones AS observaciones_paseo,
                    m.id_mascota,
                    m.nombre AS nombre_mascota,
                    t.Tipo AS especie,
                    s.nom_subtipo AS raza,
                    mf.tamano,
                    h.no_habit AS numero_habitacion,
                    th.nombre AS tipo_habitacion,
                    d.nombre || ' ' || d.apellido_Pat AS nombre_dueno,
                    r.id_reservacion,
                    r.observaciones AS observaciones_reservacion
                FROM api_v2_bitacorapaseo bp
                JOIN api_v2_reservaciones r ON bp.id_reservacion = r.id_reservacion
                JOIN api_v2_empleado e ON r.id_empleado_id = e.id_empleado
                JOIN api_v2_mascotabase m ON r.id_mascota_id = m.id_mascota
                JOIN api_v2_subtipo s ON m.id_subtipo = s.id_subtipo
                JOIN api_v2_tipo t ON s.id_tipo = t.id_tipo
                LEFT JOIN LATERAL (
                    SELECT tamano
                    FROM api_v2_mascotafisica
                    WHERE id_mascota = m.id_mascota
                    ORDER BY id_registro DESC
                    LIMIT 1
                ) mf ON TRUE
                LEFT JOIN api_v2_reservacionhotel rh ON r.id_reservacion = rh.id_reservacion_id
                LEFT JOIN api_v2_habitacion h ON rh.no_habit_id = h.no_habit
                LEFT JOIN api_v2_tipohabitacion th ON h.id_tipo_habitacion_id = th.id_tipo_habitacion
                JOIN api_v2_dueno d ON r.id_dueno_id = d.id_dueno
                WHERE e.id_empleado = %s
                AND r.fecha_reservacion BETWEEN %s AND %s
                ORDER BY r.fecha_reservacion DESC, bp.hora_inicio;
            """, [cuidador_id, fecha_inicio, fecha_fin])

            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

        return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)

    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

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


@api_view(["POST"])
@permission_classes([AllowAny])
def reporte_servicios_por_rubro(request):
    """
    Consulta 5: Gastos por rubro de una mascota
    """
    try:
        # Obtener id_mascota del cuerpo de la solicitud
        mascota_id = request.data.get('mascota_id', 1)  # Valor por defecto: 1 si no se pasa id_mascota
        if not mascota_id:
            return Response({"detail": "El ID de la mascota es obligatorio."}, status=status.HTTP_400_BAD_REQUEST)
        
        # Consulta SQL para obtener los servicios y los gastos por rubro
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
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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

@api_view(["POST"])
@permission_classes([AllowAny])
def paseos_por_mascota(request):
    """
    Consulta 7: Bitácora de paseos de una mascota
    """
    try:
        # Obtener mascota_id del cuerpo de la solicitud (POST)
        mascota_id = request.data.get('mascota_id', 1)  # Valor por defecto: 1 si no se pasa mascota_id
        if not mascota_id:
            return Response({"detail": "El ID de la mascota es obligatorio."}, status=status.HTTP_400_BAD_REQUEST)

        # Consulta SQL
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
                JOIN api_v2_reservaciones r ON bp.id_reservacion = r.id_reservacion
                JOIN api_v2_empleado e ON r.id_empleado_id = e.id_empleado
                WHERE r.id_mascota_id = %s;
            """, [mascota_id])
            
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]

        return Response({"count": len(data), "results": data}, status=status.HTTP_200_OK)

    except Exception as err:
        return Response({"detail": "Error en la consulta", "error": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["POST"])
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

@api_view(["POST"])
@permission_classes([AllowAny])
def reporte_servicios_mensuales(request):
    """
    Consulta 9: Servicios mensuales realizados
    """
    try:
        # Obtener el año del cuerpo de la solicitud (POST)
        anio = request.data.get('anio', 2023)  # Valor por defecto: 2023 si no se pasa 'anio'

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