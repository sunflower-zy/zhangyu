FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./game/dist /usr/share/nginx/html
