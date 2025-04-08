FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

CMD ["npm","run", "dev"]