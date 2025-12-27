# Imagen base de Node
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias primero (mejor caché)
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Puerto de Vite
EXPOSE 5173

# Ejecutar Vite accesible desde fuera del contenedor
CMD ["npm", "run", "dev", "--", "--host"]

