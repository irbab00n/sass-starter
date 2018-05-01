const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;