FROM node:20-alpine

WORKDIR /web-service

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start", "-a", "0.0.0.0", "-P", "3000"]
# CMD ["nodemon", "api.js", "-a", "0.0.0.0", "-p", "3000"]
# CMD ["npm", "start", "-a", "0.0.0.0", "-p", "3000"]