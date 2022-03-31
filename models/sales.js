const connection = require('./connection');

const getAllSales = async () => {
    const getAll = `SELECT
                            sales_products.sale_id as saleId,
                            sales.date,
                            sales_products.product_id as productId,
                            sales_products.quantity

                    FROM StoreManager.sales

                    JOIN StoreManager.sales_products

                    ON sales.id = sales_products.sale_id

                    ORDER BY saleId,productId`;

    const [allSales] = await connection.execute(getAll);

    return allSales;
};

module.exports = {
  getAllSales,
};
