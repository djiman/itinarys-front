FROM node:12 AS compile-image

RUN npm install

RUN mkdir -p /opt/ng
WORKDIR /opt/ng
COPY package*.json ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build --prod