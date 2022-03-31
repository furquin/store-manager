const checkName = (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name || name.length === 0) {
      return res
        .status(400)
        .json({ message: '"name" is required' });
    }

    if (name.length < 5) {
      return res
        .status(422)
        .json({ message: '"name" length must be at least 5 characters long' });
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
  checkName,
  checkQuantity,
};
