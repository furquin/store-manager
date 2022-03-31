const serviceProducts = require('../services/products');

const getAllProducts = async (req, res) => {
  const allProducts = await serviceProducts.getAllProducts();

  res.status(200).json(allProducts);
};

const getByIdProducts = async (req, res) => {
  const { id } = req.params;

  const productById = await serviceProducts.getByIdProducts(id);

  if (!productById || productById.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productById);
};
module.exports = {
  getAllProducts,
  getByIdProducts,
};
