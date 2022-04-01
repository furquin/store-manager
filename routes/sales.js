const express = require('express');
const {
  getAllSales,
  getSaleById,
  createSales,
  updateSales,
} = require('../controllers/sales');
const { checkProductId, checkQuantity } = require('../middlewares/checkSales');

const routes = express.Router();

routes.route('/')
  .post(checkProductId, checkQuantity, createSales)
  .get(getAllSales);

routes.route('/:id')
  .get(getSaleById)
  .put(checkProductId, checkQuantity, updateSales);

module.exports = routes;
