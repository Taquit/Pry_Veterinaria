--Si es la primera vez que se corre la base de datos, descomentar las siguientes lineas para cargar los datos iniciales

\copy api_tipo(tipo) FROM 'seed/Tipo(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

\copy api_subtipo(id_Tipo,nom_subtipo,esp_VidaMin,esp_VidaMax,desc_Subtipo)FROM 'seed/Subtipo(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

\copy api_subtipo_mamifero(id_Subtipo,peso_Min,peso_Max,Size_Subtipo) FROM 'seed/Subtipo_Mamifero(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

\copy api_subtipo_exotico(id_subtipo,min_size,max_size,nivel_interaccion) FROM 'seed/Subtipo_Exotico(UTF8).csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

\copy  api_catalogo_cp(codigoP,d_asenta,d_tipo_asenta,d_mnpio,d_estado,id_estado,id_tipo_asenta,id_mnpio,idasenta) FROM 'seed/catalogo_cp.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'LATIN1');
