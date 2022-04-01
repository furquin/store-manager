const modelSales = require('../models/sales');

const getAllSales = async () => {
  const allSales = await modelSales.getAllSales();

  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await modelSales.getSaleById(id);

  return saleById;
};

const createSales = async (sales) => {
  const newSales = await modelSales.createSales(sales);

  return newSales;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSales,
};
