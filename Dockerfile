FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY ./ /app/

RUN npm install

ARG configuration=production

RUN npm run build -- --output-path=dist --configuration=$configuration
