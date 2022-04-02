const express = require('express');
const {
  getAllSales,
  getSaleById,
  createSales,
  updateSales,
  deleteSales,
} = require('../controllers/sales');
const {
  checkProductId,
  checkQuantity,
  checkSaleById,
  checkQuantityProduct,
} = require('../middlewares/checkSales');

const routes = express.Router();

routes.route('/')
  .post(checkProductId, checkQuantity, checkQuantityProduct, createSales)
  .get(getAllSales);

routes
  .route('/:id')
  .get(checkSaleById, getSaleById)
  .put(checkProductId, checkQuantity, updateSales)
  .delete(checkSaleById, deleteSales);

module.exports = routes;
