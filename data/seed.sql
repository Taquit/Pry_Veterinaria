--Si es la primera vez que se corre la base de datos, descomentar las siguientes lineas para cargar los datos iniciales

--\copy api_tipo(tipo) FROM 'seed/Tipo(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_subtipo(id_Tipo,nom_subtipo,esp_VidaMin,esp_VidaMax,desc_Subtipo)FROM 'seed/Subtipo(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_subtipo_mamifero(id_Subtipo,peso_Min,peso_Max,Size_Subtipo) FROM 'seed/Subtipo_Mamifero(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_subtipo_exotico(id_subtipo,min_size,max_size,nivel_interaccion) FROM 'seed/Subtipo_Exotico(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_catalogocp("codigoP", id_asenta, d_tipo_asenta, d_mnpio, d_estado, id_estado, id_tipo_asenta, id_mnpio, d_asenta) FROM '/seed/Catalogo_cp.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');


--\copy api_empleado(id_puesto,nombre,apellido_pat,apellido_mat,telefono,correo,usuario,contraseña) FROM 'seed/Empleadocsv.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_habitacion(estatus,costo,desc) FROM 'seed/Habitacion.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_puesto(puesto,desc)  FROM 'seed/Puestos.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_servicio(servicio,costo,desc) FROM 'seed/Servicios.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

--\copy api_vacuna(id_tipo,nombre_vac,via_admin,importancia,tiempo_min,tiempo_max) FROM 'seed/vacunas_V2.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

