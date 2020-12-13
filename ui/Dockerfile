FROM node:alpine

WORKDIR /ads_ui

COPY package.json /ads_ui

RUN npm install

COPY . /ads_ui

CMD ["npm", "start"]