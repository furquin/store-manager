const connection = require('./connection');

const getAllProducts = async () => {
  const getAll = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [allProducts] = await connection.execute(getAll);
  return allProducts;
};

const getByIdProducts = async (id) => {
  const getById = 'SELECT * FROM StoreManager.products  WHERE id = ?';
  const [idProduct] = await connection.execute(getById, [id]);
  return idProduct;
};

module.exports = {
  getAllProducts,
  getByIdProducts,
};
