FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN apk add --update python3 py3-pip make g++ 

RUN npm install 

COPY . .

EXPOSE 3030

CMD ["npm", "start"]