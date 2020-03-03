'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongosse = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongosse.connect('mongodb+srv://balta:balta@ndstr-7pz3g.azure.mongodb.net/test?retryWrites=true&w=majority');

//Carrega as Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;