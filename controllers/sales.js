const serviceSales = require('../services/sales');

const getAllSales = async (req, res) => {
    const allSales = await serviceSales.getAllSales();

    res.status(200).json(allSales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const saleById = await serviceSales.getSaleById(id);

  if (!saleById || saleById.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(saleById);
};
module.exports = {
  getAllSales,
  getSaleById,
};
