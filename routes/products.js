const express = require('express');
const {
  getAllProducts,
  getByIdProducts,
  createProducts,
  updateProduct,
  deleteByIdProducts,
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
  .post(checkName, checkQuantity, checkNameExist, createProducts)
  .get(getAllProducts);

routes
  .route('/:id')
  .get(checkById, getByIdProducts)
  .put(checkName, checkQuantity, checkById, updateProduct)
  .delete(checkById, deleteByIdProducts);

module.exports = routes;
