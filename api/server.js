const express = require("express");

const Characters = require("./ftCharacters/ftCharacters-model.js");

const server = express();

server.use(express.json());

module.exports = server;