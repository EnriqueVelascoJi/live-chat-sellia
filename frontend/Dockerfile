FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./



RUN npm install
RUN npm install -g serve

COPY . ./

RUN chown -R node:node /app/node_modules
EXPOSE 5173

CMD ["npm", "run", "dev", "--host"]