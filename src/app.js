const express = require('express');
const bodyParser     =        require("body-parser");
const db = require('./config/database').db;
const productRouter = require('../src/routes/product.route')

let app = express();
app.use(bodyParser.json());
  
app.use(productRouter);

module.exports = app
