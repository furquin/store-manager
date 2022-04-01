const { getByName, getByIdProducts } = require('../services/products');

const checkNameExist = async (req, res, next) => {
  try {
    const { name } = req.body;
    const nameExist = await getByName(name);

    if (nameExist) {
              return res.status(409).json({ message: 'Product already exists' });
    }
    next();
  } catch (e) {
    next(e);
  }
};

const checkName = (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name.length === 0) {
      return res.status(400).json({ message: '"name" is required' });
    }

    if (name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    next();
  } catch (e) {
    next(e);
  }
};

const checkQuantity = (req, res, next) => {
    try {
      const { quantity } = req.body;

      if (quantity <= 0) {
        return res
          .status(422)
          .json({ message: '"quantity" must be greater than or equal to 1' });
      }

      if (!quantity) {
        return res.status(400).json({ message: '"quantity" is required' });
      }

      next();
    } catch (e) {
      next(e);
    }
};

const checkById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getByIdProducts(id);
    if (!product || product.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  checkNameExist,
  checkName,
  checkQuantity,
  checkById,
};
