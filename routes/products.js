const express = require('express');
const controllerProducts = require('../controllers/products');

const routes = express.Router();

routes.route('/')
  .get(controllerProducts.getAllProducts);

routes.route('/:id')
  .get(controllerProducts.getByIdProducts);

module.exports = routes;
