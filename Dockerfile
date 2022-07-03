FROM node:16.14.2-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:alpine
COPY ./my_nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/musicdb-app/ /usr/share/nginx/html/
EXPOSE 80