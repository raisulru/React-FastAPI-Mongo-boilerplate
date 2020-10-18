FROM node:10

WORKDIR /usr/src/app/lead_ui

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "start"]