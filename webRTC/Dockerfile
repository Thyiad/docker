FROM node:12-alpine

WORKDIR /app

COPY ./ /app/

ENV NPM_CONFIG_REGISTRY https://registry.npm.taobao.org

EXPOSE 8042

RUN npm install

RUN npm run build

CMD ["node","./dist/index.js"]
