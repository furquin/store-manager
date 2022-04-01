const serviceProducts = require('../services/products');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await serviceProducts.getAllProducts();

    return res.status(200).json(allProducts);
  } catch (e) {
    next(e);
  }
};

const getByIdProducts = async (req, res, next) => {
  const { id } = req.params;

  try {
    const productById = await serviceProducts.getByIdProducts(id);

    return res.status(200).json(productById);
  } catch (e) {
    next(e);
  }
};

const createProducts = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const newProduct = await serviceProducts.createProducts(name, quantity);

    return res.status(201).json(newProduct);
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const upDate = await serviceProducts.updateProduct(id, name, quantity);

    return res.status(200).json(upDate);
  } catch (e) {
   next(e);
  }
};
module.exports = {
  getAllProducts,
  getByIdProducts,
  createProducts,
  updateProduct,
};
