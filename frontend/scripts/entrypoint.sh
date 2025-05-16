#!/bin/sh

# 환경 변수 치환
envsubst '${NGINX_SERVER_NAME} ${BACKEND_HOST} ${BACKEND_PORT}' \
  < /etc/nginx/templates/default.conf.template \
  > /etc/nginx/conf.d/default.conf

# Nginx 실행
exec nginx -g 'daemon off;'
