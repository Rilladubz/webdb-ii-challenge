const express = require("express");
const helmet = require("helmet");

const Cars = require("../Cars/cars-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>SERVER IS RUNNING</h1>");
});

server.use("/api/cars", Cars);

module.exports = server;
