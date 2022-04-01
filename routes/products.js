const express = require('express');
const {
  getAllProducts,
  getByIdProducts,
  createProducts,
  updateProduct,
} = require('../controllers/products');
const {
  checkNameExist,
  checkName,
  checkQuantity,
  checkById,
} = require('../middlewares/checkProducts');

const routes = express.Router();

routes
  .route('/')
  .post(checkNameExist, checkName, checkQuantity, createProducts)
  .get(getAllProducts);

routes
  .route('/:id')
  .get(checkById, getByIdProducts)
  .put(checkById, checkName, checkQuantity, updateProduct);

module.exports = routes;
