################################################################################
# Builder stage
FROM node:22 as builder

WORKDIR /app

COPY package*.json .nvmrc ./

RUN npm install

RUN npm i -g serve

COPY . .

COPY .env ./

RUN npm run build

CMD ["serve", "-s", "dist"]


