const connection = require('./connection');

const getAllProducts = async () => {
  const getAll = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [allProducts] = await connection.execute(getAll);
  return allProducts;
};

module.exports = {
  getAllProducts,

};
