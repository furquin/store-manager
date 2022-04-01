const express = require('express');
const {
  getAllProducts,
  getByIdProducts,
  createProducts,
} = require('../controllers/products');
const {
  checkNameExist,
  checkName,
  checkQuantity,
} = require('../middlewares/checkProducts');

const routes = express.Router();

routes
  .route('/')
  .post(checkNameExist, checkName, checkQuantity, createProducts)
  .get(getAllProducts);

routes.route('/:id')
  .get(getByIdProducts);

module.exports = routes;
