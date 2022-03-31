const express = require('express');
const getSales = require('../controllers/sales');

const routes = express.Router();

routes.route('/')
  .get(getSales.getAllSales);

module.exports = routes;
