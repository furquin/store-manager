const modelProducts = require('../models/products');

const getAllProducts = async () => {
  const allProducts = await modelProducts.getAllProducts();

  return allProducts;
};

module.exports = {
  getAllProducts,
};
