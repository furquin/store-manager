const express = require('express');
const getSales = require('../controllers/sales');

const routes = express.Router();

routes.route('/')
  .get(getSales.getAllSales);

routes.route('/:id')
  .get(getSales.getSaleById);

module.exports = routes;
