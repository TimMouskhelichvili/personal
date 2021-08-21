FROM node:16.7-alpine3.14

RUN apk add libwebp libwebp-tools

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --ignore-scripts
COPY . /usr/src/app

RUN npm run webp
RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]