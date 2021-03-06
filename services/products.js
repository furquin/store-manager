const modelProducts = require('../models/products');

const getAllProducts = async () => {
  const allProducts = await modelProducts.getAllProducts();

  return allProducts;
};

const getByIdProducts = async (id) => {
  const productById = await modelProducts.getByIdProducts(id);

  return productById;
};

const getByName = async (name) => {
  const productName = await modelProducts.getByName(name);

  return productName;
};

const createProducts = async (name, quantity) => {
  const InsertNewProduct = await modelProducts.createProducts(name, quantity);

  return InsertNewProduct;
};

const updateProduct = async (id, name, quantity) => {
  const upDate = await modelProducts.updateProduct(id, name, quantity);
  return upDate;
};

const deleteByIdProducts = async (id) => {
  const deleteById = await modelProducts.deleteByIdProducts(id);

  return deleteById;
};
module.exports = {
  getAllProducts,
  getByIdProducts,
  getByName,
  createProducts,
  updateProduct,
  deleteByIdProducts,
};
