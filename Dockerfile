FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

CMD ["node", "--env-file=.env", "build/index.js"]



EXPOSE 3000