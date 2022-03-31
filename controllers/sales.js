const serviceSales = require('../services/sales');

const getAllSales = async (req, res) => {
    const allSales = await serviceSales.getAllSales();

    res.status(200).json(allSales);
};

module.exports = {
  getAllSales,
};
