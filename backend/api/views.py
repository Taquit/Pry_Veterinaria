from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.db import connection
from django.conf import settings

# Create your views here.
class TipoViewSet(viewsets.ModelViewSet):
    queryset = Tipo.objects.all()
    serializer_class = TiposSerializer

class SubtipoViewSet(viewsets.ModelViewSet):
    queryset = Subtipo.objects.all()
    serializer_class = SubtipoSerializer

class Subtipo_ExoticoViewSet(viewsets.ModelViewSet):
    queryset = Subtipo_exotico.objects.all()
    serializer_class = Subtipo_ExoticoSerializer

class Subtipo_MamiferoViewSet(viewsets.ModelViewSet):
    queryset = Subtipo_Mamifero.objects.all()
    serializer_class = Subtipo_MamiferoSerializer

class VacunaViewSet(viewsets.ModelViewSet):
    queryset = Vacuna.objects.all()
    serializer_class = VacunaSerializer

class Mascota_VacunaViewSet(viewsets.ModelViewSet):
    queryset = Mascota_Vacuna.objects.all()
    serializer_class = Mascota_VacunaSerializer

class CatalogoCPViewSet(viewsets.ModelViewSet):
    queryset = CatalogoCP.objects.all()
    serializer_class = CatalogoCPSerializer

class DomicilioViewSet(viewsets.ModelViewSet):
    queryset = Domicilio.objects.all()
    serializer_class = DomicilioSerializer

class DueñoViewSet(viewsets.ModelViewSet):
    queryset = Dueño.objects.all()
    serializer_class = DueñoSerializer

class Contacto_emergenciaViewSet(viewsets.ModelViewSet):
    queryset = Contacto_emergencia.objects.all()
    serializer_class = Contacto_emergenciaSerializer

class PuestoViewSet(viewsets.ModelViewSet):
    queryset = Puesto.objects.all()
    serializer_class = PuestoSerializer

class MascotaViewSet(viewsets.ModelViewSet):
    queryset = Mascota.objects.all()
    serializer_class = MascotaSerializer

class ReservacionViewSet(viewsets.ModelViewSet):
    queryset = Reservacion.objects.all()
    serializer_class = ReservacionSerializer

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

class HabitacionViewSet(viewsets.ModelViewSet):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer

@api_view(["POST"])
@permission_classes([AllowAny])
def Login_dueno(request):
    email = (request.data.get("email") or "").strip()
    password = (
        request.data.get("password")
        or request.data.get("contraseña")
        or request.data.get("contrasena")
        or ""
    ).strip()

    if not email or not password:
        return Response({"detail": "Faltan credenciales"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT "id_dueño", "nombre", "email"
                FROM "api_dueño"
                WHERE "email" = %s AND "contraseña" = %s;
                """,
                [email, password]
            )
            row = cursor.fetchone()
    except Exception as e:
        return Response({"detail": "Error SQL", "error": str(e)}, status=500)

    if not row:
        return Response({"detail": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)

    id_dueno, nombre, email_db = row
    return Response({"ok": True, "id_dueño": id_dueno, "nombre": nombre, "email": email_db})


@api_view(["POST"])
@permission_classes([AllowAny])
def Post_ContactoE(request):
    nombre = (request.data.get("nombre" or "")).strip()
    apelldio_p = (request.data.get("apellido_p" or "")).strip()
    apellido_m = (request.data.get("apellido_m" or "")).strip()
    telefono = (request.data.get("telefono_contacto" or "")).strip()
    correo = (request.data.get("correo" or "")).strip()
    
    if not nombre or not telefono or not correo:
        return Response({"detail":"fatlan datos"},status=status.HTTP_204_NO_CONTENT)

    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                INSERT INTO api_contacto_emergencia (nombre,apellido_p,apellido_m,telefono_contacto,correo)
                VALUES ( %s , %s,%s,,%s,%s);
                """,
                [nombre,apelldio_p,apellido_m,telefono,correo]
            )
    except Exception as e:
        return Response({"detail": "Error SQL", "error": str(e)}, status=500)
    
@api_view(["POST"])
@permission_classes([AllowAny])
def Get_dom(request):
    codigoP =(request.data.get("codigoP"or"")).strip()

    
    if not codigoP:
        return Response({"detail":"falta codigo psotal"},status=status.HTTP_206_PARTIAL_CONTENT)
    
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT * 
                FROM api_catalogocp
                WHERE "codigoP"=%s
                ORDER BY d_asenta;
                """,
                [codigoP]
            )
            columns =[col[0] for col in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns,row)) for row in rows]
            return Response(
                {"count":len(data),"results":data},
                status=status.HTTP_200_OK
            )
    except Exception as err:
        return Response ({"detail":"Error SQL","error":str(err)},status=500)
    
@api_view(["POST"])
@permission_classes([AllowAny])
def Get_info_Dom (request):
    id_dueño =str(request.data.get("id_dueño" or "")).strip()
    
    
    if not id_dueño:
        return Response({"detail": "Faltan credenciales"}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT 
                    d.id_domicilio,
                    d.nom_calle, d.num_ext , d.num_int,
                    cp."codigoP", cp.d_asenta  , cp.d_mnpio , cp.d_estado
                FROM api_dueño du
                JOIN api_domicilio d
                    ON d.id_domicilio = du.id_domicilio
                JOIN api_catalogocp cp
                    ON cp.id = d.catalogo_id
                WHERE du.id_dueño = %s;

                """,
                [id_dueño]
            );
            row = cursor.fetchone()
        if not  row:
            return Response({"ok":True, "detail":"sin domicilio"},status=200)
        id_domicilio,nom_calle, num_ext, num_int, codigop, d_asenta, d_mnpio, d_estado = row
        return Response({
            "ok": True,
            "id_domicilio":id_domicilio,
            "nom_calle": nom_calle,
            "num_ext": num_ext,
            "num_int": num_int,
            "codigop": codigop,
            "d_asenta": d_asenta,
            "d_mnpio": d_mnpio,
            "d_estado": d_estado
        })             
    except Exception as err:
        return Response ({"detail":"Error SQL","error":str(err)},status=500)
   
@api_view(["POST"])
@permission_classes([AllowAny])
def Get_Mas_by_ID(request):
    id_dueño =str(request.data.get("id_dueño" or "")).strip()

    if not id_dueño:
        return Response({"detail": "Faltan credenciales"}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT 
                ma.id_mascota,
                    ma.nombre_mascota,
                    ma.foto,
                    ma.fecha_nac,
                    ma.peso,
                    ma.esterilizado,
                    ma.chip,
                    ma.ruac,
                    ma.sexo,
                    ma.color_prim,
                    ma.color_sec,
                    ma.comportamiento,
                    ma.cartilla_vac,
                    ma.notas,
                    ma.id_dueño,
                    ma.id_subtipo,
                    sub.nom_subtipo,
                    t.id_tipo,
                    t.tipo 
                FROM api_mascota ma 
                JOIN api_subtipo sub 
                    ON ma.id_subtipo=sub.id_subtipo 
                JOIN api_tipo t 
                    ON t.id_tipo=sub.id_tipo  
                WHERE id_dueño =%s;
                """,
                [id_dueño]
            );
            rows = cursor.fetchall()
        if not  rows:
            return Response({"ok":True, "detail":"sin mascotas"},status=200)
        
        mascotas=[]
        for row in rows:
            (id_mascota, nombre_mascota, foto, fecha_nac, peso, esterilizado,
                chip, ruac, sexo, color_prim, color_sec, comportamiento,
                cartilla_vac, notas, id_dueño_db, id_subtipo,
                nom_subtipo, id_tipo, tipo
            ) = row
            foto_url = None
            if foto:
                foto_url = request.build_absolute_uri(settings.MEDIA_URL + str(foto))
            mascotas.append({
                "id_mascota": id_mascota,
                "nombre_mascota": nombre_mascota,
                "foto": str(foto) if foto else None,
                "foto_url": foto_url,
                "fecha_nac": fecha_nac,
                "peso": peso,
                "esterilizado": esterilizado,
                "chip": chip,
                "ruac": ruac,
                "sexo": sexo,
                "color_prim": color_prim,
                "color_sec": color_sec,
                "comportamiento": comportamiento,
                "cartilla_vac": cartilla_vac,
                "notas": notas,
                "id_dueño": id_dueño_db,
                "id_subtipo": id_subtipo,
                "nom_subtipo": nom_subtipo,
                "id_tipo": id_tipo,
                "tipo": tipo,
            })    
        return Response({ "mascotas": mascotas}, status=200)
    except Exception as err:
        return Response ({"detail":"Error SQL","error":str(err)},status=500)
    
@api_view(["POST"])
@permission_classes([AllowAny])
def Get_info_Emergencia(request):
    id_dueño =str(request.data.get("id_dueño" or "")).strip()

    if not id_dueño:
        return Response({"detail": "Faltan credenciales"}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT e.* FROM api_dueño d 
                JOIN api_contacto_emergencia e 
                    ON e.id_contacto=d.id_contacto 
                WHERE d.id_dueño=%s;
                """,[id_dueño]
            )
            row = cursor.fetchone()
        if not row:
            return Response({"ok":True,"detail":"sin contacto de mascota"},status=200)
        id_contacto,nombre,apellido_p,apellido_m,telefono_contacto,correo = row
        return Response({
            "ok":True,
            "id_contacto":id_contacto,
            "nombre":nombre,
            "apellido_p":apellido_p,
            "apellido_m":apellido_m,
            "telefono_contacto":telefono_contacto,
            "correo":correo

        },status=200)
    except Exception as err:
        return Response ({"detail":"Error SQL","error":str(err)},status=500)