FROM node:21

WORKDIR /app

COPY Server/package*.json ./

RUN npm install

COPY Server .

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "index.js" ]