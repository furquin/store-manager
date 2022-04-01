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

const updateSales = async (id, productId, quantity) => {
  const updatedSales = await modelSales.updateSales(id, productId, quantity);

  return updatedSales;
};

const deleteSales = async (id) => {
  const deleted = await modelSales.deleteSales(id);

  return deleted;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSales,
  updateSales,
  deleteSales,
};
