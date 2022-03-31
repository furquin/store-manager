const modelSales = require('../models/sales');

const getAllSales = async () => {
  const allSales = await modelSales.getAllSales();

  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await modelSales.getSaleById(id);

  return saleById;
};

module.exports = {
  getAllSales,
  getSaleById,
};
