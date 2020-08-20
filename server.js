const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

module.exports = server;
