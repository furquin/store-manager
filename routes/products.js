const express = require('express');
const controllerProducts = require('../controllers/products');

const routes = express.Router();

routes.route('/')
  .get(controllerProducts.getAllProducts);

module.exports = routes;
