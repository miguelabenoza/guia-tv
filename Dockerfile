# Imagen base ligera de Node.js
FROM node:22-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar ficheros de dependencias primero
COPY package*.json ./

# Instalar dependencias (solo de producción)
RUN npm install --omit=dev

# Copiar el resto del proyecto (excluyendo node_modules gracias a .dockerignore)
COPY . .

# Exponer el puerto (ajusta si tu app usa otro)
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
