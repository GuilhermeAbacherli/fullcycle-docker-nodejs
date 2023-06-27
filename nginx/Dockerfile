FROM nginx:stable-alpine3.17-slim

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

# RUN mkdir -p /var/www/public && \
#   touch /var/www/public/index.js

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]
