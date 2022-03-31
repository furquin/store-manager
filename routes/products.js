const express = require('express');
const { getAllProducts, getByIdProducts } = require('../controllers/products');
const { checkName, checkQuantity } = require('../middlewares/checkProducts');

const routes = express.Router();

routes.route('/')
  .post(checkName, checkQuantity)
  .get(getAllProducts);

routes.route('/:id')
  .get(getByIdProducts);

module.exports = routes;
