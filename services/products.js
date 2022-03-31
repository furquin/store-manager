const modelProducts = require('../models/products');

const getAllProducts = async () => {
  const allProducts = await modelProducts.getAllProducts();

  return allProducts;
};

const getByIdProducts = async (id) => {
  const productById = await modelProducts.getByIdProducts(id);

  return productById;
};

module.exports = {
  getAllProducts,
  getByIdProducts,
};
