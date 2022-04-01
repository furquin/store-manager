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

const getSaleById = async (id) => {
    const getSale = `SELECT
                            sales.date,
                            sales_products.product_id as productId,
                            sales_products.quantity

                    FROM StoreManager.sales

                    JOIN StoreManager.sales_products

                    ON sales.id = sales_products.sale_id

                    WHERE id = ?

                    ORDER BY productId`;

    const [saleById] = await connection.execute(getSale, [id]);

    return saleById;
};

const createSales = async (sales) => {
  const querySaleProducts = `INSERT INTO StoreManager.sales_products (sale_id, product_Id, quantity)
                          VALUES(?, ?, ?)`;

  const queryCreateSale = `INSERT INTO StoreManager.sales (date)
                            Values(NOW())`;

  const [{ insertId }] = await connection.execute(queryCreateSale);

  const salesProducts = sales.map(({ productId, quantity }) =>
    connection.execute(querySaleProducts, [insertId, productId, quantity]));

  await Promise.all(salesProducts);

  return {
    id: insertId,
    itemsSold: sales,
  };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSales,
};
