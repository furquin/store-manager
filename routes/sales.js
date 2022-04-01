const express = require('express');
const {
  getAllSales,
  getSaleById,
  createSales,
} = require('../controllers/sales');
const { checkProductId, checkQuantity } = require('../middlewares/checkSales');

const routes = express.Router();

routes.route('/')
  .post(checkProductId, checkQuantity, createSales)
  .get(getAllSales);

routes.route('/:id')
  .get(getSaleById);

module.exports = routes;
