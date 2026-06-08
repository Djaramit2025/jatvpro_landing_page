# Usamos una imagen de Nginx ultra ligera como base
FROM nginx:alpine

# Copiamos todo el contenido de nuestra carpeta local al directorio de Nginx
# donde se sirven las páginas web por defecto
COPY . /usr/share/nginx/html/

# Exponemos el puerto 80 para el tráfico web
EXPOSE 80

# Nginx se arranca automáticamente, así que no requiere un CMD complejo