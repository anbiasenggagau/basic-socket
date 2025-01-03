FROM node:20.17.0-alpine3.20 AS builder

RUN apk add --no-cache gcompat

WORKDIR /app

COPY . ./
RUN npm ci --only=production

CMD [ "node","index.js" ]