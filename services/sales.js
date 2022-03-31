const modelSales = require('../models/sales');

const getAllSales = async () => {
  const allSales = await modelSales.getAllSales();

  return allSales;
};

module.exports = {
  getAllSales,
};
