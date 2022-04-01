const serviceSales = require('../services/sales');

const getAllSales = async (req, res, next) => {
  try {
    const allSales = await serviceSales.getAllSales();

    res.status(200).json(allSales);
  } catch (e) {
    next(e);
  }
};

const getSaleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const saleById = await serviceSales.getSaleById(id);

    if (!saleById || saleById.length === 0) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(saleById);
  } catch (e) {
    next(e);
  }
};

const createSales = async (req, res, next) => {
  try {
    const sales = [...req.body];

    const newSale = await serviceSales.createSales(sales);

    return res.status(201).json(newSale);
  } catch (e) {
    next(e);
  }
};
module.exports = {
  getAllSales,
  getSaleById,
  createSales,
};
