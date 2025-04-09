# Estágio 1: Construção da aplicação
FROM node:20.10.0 as build

WORKDIR /soterrenos

# Cache de dependências
COPY package.json yarn.lock ./
RUN yarn install

# Copiar arquivos do projeto e buildar
COPY . .
RUN yarn build

# Estágio 2: Servidor web de produção
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /soterrenos/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]