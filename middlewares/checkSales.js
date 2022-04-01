const { getSaleById } = require('../services/sales');

const checkProductId = (req, res, next) => {
  try {
  const [{ productId }] = req.body;
  if (!productId || typeof productId !== 'number') {
    return res
      .status(400)
      .json({ message: '"productId" is required' });
  }
    next();
  } catch (e) {
    next(e);
  }
};

const checkQuantity = (req, res, next) => {
  try {
    const [{ quantity }] = req.body;

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

const checkSaleById = async (req, res, next) => {
  try {
  const { id } = req.params;
  const saleById = await getSaleById(id);

  if (!saleById || saleById.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  checkProductId,
  checkQuantity,
  checkSaleById,
};
