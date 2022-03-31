const express = require('express');
const { getAllSales, getSaleById } = require('../controllers/sales');
const { checkProductId, checkQuantity } = require('../middlewares/checkSales');

const routes = express.Router();

routes.route('/')
  .post(checkProductId, checkQuantity)
  .get(getAllSales);

routes.route('/:id')
  .get(getSaleById);

module.exports = routes;
