const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("express js middleware");
  next();
});

app.use((req, res, next) => {
  console.log("another express js middleware");
});

const server = http.createServer(app);

server.listen(3001);
