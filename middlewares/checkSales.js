const checkProductId = (req, res, next) => {
  try {
  const { productId } = req.body;
  const productIdInt = parseInt(productId, 10);
  if (!productIdInt) {
    return res
      .status(400)
      .json({ message: '"productId" is required' });
    }
  } catch (e) {
    next(e);
  }
};

const checkQuantity = (req, res, next) => {
  try {
     const { quantity } = req.body;

     if (!quantity || quantity.length === 0) {
       return res.status(400).json({ message: '"quantity" is required' });
     }

     if (quantity.length <= 0) {
       return res
         .status(422)
         .json({ message: '"quantity" must be greater than or equal to 1' });
     }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  checkProductId,
  checkQuantity,
};
