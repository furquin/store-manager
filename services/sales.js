const modelSales = require('../models/sales');
const modelProducts = require('../models/products');

const getAllSales = async () => {
  const allSales = await modelSales.getAllSales();

  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await modelSales.getSaleById(id);

  return saleById;
};

const createSales = async (sales) => {
  const [{ productId, quantity }] = sales;

  const newSales = await modelSales.createSales(sales);

  await modelProducts.updateQuantitySale(productId, quantity);

  return newSales;
};

const updateSales = async (id, productId, quantity) => {
  const updatedSales = await modelSales.updateSales(id, productId, quantity);

  return updatedSales;
};

const deleteSales = async (id) => {
  const saleById = await modelSales.getSaleById(id);
  const [{ productId, quantity }] = saleById;

  const deleted = await modelSales.deleteSales(id);

  await modelProducts.updateQuantityDelete(productId, quantity);

  return deleted;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSales,
  updateSales,
  deleteSales,
};
