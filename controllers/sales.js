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

const updateSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [{ productId, quantity }] = req.body;

    const updatedSale = await serviceSales.updateSales(id, productId, quantity);

    res.status(200).json(updatedSale);
  } catch (e) {
    next(e);
  }
};

const deleteSales = async (req, res, next) => {
  try {
  const { id } = req.params;

  await serviceSales.deleteSales(id);

    return res.status(204).end();
  } catch (e) {
    next(e);
  }
};
module.exports = {
  getAllSales,
  getSaleById,
  createSales,
  updateSales,
  deleteSales,
};
