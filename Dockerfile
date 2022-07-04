FROM node:14
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3007
CMD ["npm","run","start"]
