'use strict';

// var http = require("http"),
//     zlib = require("zlib");

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.json())
app.get('/', (req, res) => {
  console.log('hola')
  res.send('Hello World');
});

app.post('/post', (req, res) => {
  console.log('post')
  console.log(req.body)
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
