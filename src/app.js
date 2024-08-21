const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

/* Returns a list of dictionary words from the words.txt file. */
const readmovieNames = () => {
  const contents = fs.readFileSync("words.txt", "utf8");
  return contents.split("\n");
};

// TODO: your code to handle

server.listen(3000);
