FROM node:lts-alpine3.18

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "ci", "--omit=dev"]

COPY ["index.js", "./"]

EXPOSE 3000
CMD [ "node", "index.js" ]
