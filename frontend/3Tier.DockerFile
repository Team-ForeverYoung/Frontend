FROM node:20.18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN npm rebuild esbuild

COPY . .

RUN npm run build

FROM nginx:latest

COPY ./default.conf.template /etc/nginx/templates/default.conf.template
COPY ./scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
