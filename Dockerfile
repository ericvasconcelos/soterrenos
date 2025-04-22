# step 1: build application
FROM node:20.12.2-alpine as builder

ARG _VITE_API_URL
ARG _VITE_VIA_CEP_API_URL
ARG _VITE_OPEN_STREET_API_URL
ARG _VITE_GOOGLE_MAPS_API_KEY

ENV VITE_API_URL=$_VITE_API_URL
ENV VITE_VIA_CEP_API_URL=$_VITE_VIA_CEP_API_URL
ENV VITE_OPEN_STREET_API_URL=$_VITE_OPEN_STREET_API_URL
ENV VITE_GOOGLE_MAPS_API_KEY=$_VITE_GOOGLE_MAPS_API_KEY

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Step 2: create nginx server for production
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*
COPY nginx/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist /usr/share/nginx/html
