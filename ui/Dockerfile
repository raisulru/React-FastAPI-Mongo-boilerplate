FROM node:alpine

WORKDIR /ads_ui

COPY . /ads_ui

USER root
RUN npm install --silent 
RUN npm install react-scripts -g --silent --save
RUN npm install -g serve --save
RUN npm run build
EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
