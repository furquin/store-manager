const serviceProducts = require('../services/products');

const getAllProducts = async (req, res) => {
  const allProducts = await serviceProducts.getAllProducts();

  res.status(200).json(allProducts);
};

module.exports = {
  getAllProducts,
};
