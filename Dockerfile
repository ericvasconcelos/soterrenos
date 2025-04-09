# Estágio 1: Construção da aplicação
FROM node:20.12.2-alpine AS builder

WORKDIR /app

# Cache de dependências
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copiar arquivos do projeto e buildar
COPY . .
RUN yarn build

# Estágio 2: Servidor web de produção
FROM nginx:alpine

# Remover configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copiar configuração customizada do Nginx
COPY nginx/nginx.conf /etc/nginx/templates/default.conf.template

# Copiar os arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Não é necessário EXPOSE pois o Cloud Run usa variável PORT