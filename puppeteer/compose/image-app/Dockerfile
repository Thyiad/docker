FROM thyiad/puppeteer:lastest

WORKDIR /root/app

COPY --chown=pptruser:pptruser ./ /root/app

RUN npm install --registry http://npm.zhonganinfo.com

EXPOSE 8080

CMD ["npm ","start"]