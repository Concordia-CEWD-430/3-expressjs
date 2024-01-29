const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("express js middleware");
  next();
});

app.use((req, res, next) => {
  console.log("another express js middleware");
  res.send("<h1>Hello</h1>");
});

const server = http.createServer(app);

server.listen(3001);
