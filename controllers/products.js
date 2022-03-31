const serviceProducts = require('../services/products');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await serviceProducts.getAllProducts();

    res.status(200).json(allProducts);
  } catch (e) {
    next(e);
  }
};

const getByIdProducts = async (req, res, next) => {
  const { id } = req.params;

  try {
    const productById = await serviceProducts.getByIdProducts(id);

    if (!productById || productById.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(productById);
  } catch (e) {
    next(e);
  }
};
module.exports = {
  getAllProducts,
  getByIdProducts,
};
