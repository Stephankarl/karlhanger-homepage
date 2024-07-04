FROM node:22.4.0-slim AS dev
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

FROM node:22.4.0-slim AS prod
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine3.19-slim AS build
COPY --from=prod /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]