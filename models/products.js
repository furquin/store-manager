const connection = require('./connection');

const getAllProducts = async () => {
  const getAll = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [allProducts] = await connection.execute(getAll);
  return allProducts;
};

const getByIdProducts = async (id) => {
  const getById = 'SELECT * FROM StoreManager.products  WHERE id = ?';
  const [[idProduct]] = await connection.execute(getById, [id]);
  return idProduct;
};

const getByName = async (name) => {
  const queryName = 'SELECT name FROM StoreManager.products WHERE name = ?';

  const [[product]] = await connection.execute(queryName, [name]);

  return product;
};

const createProducts = async (name, quantity) => {
  const InsertNewProduct = `INSERT INTO
                      StoreManager.products
                        (name, quantity)
                      VALUES
                        (?, ?)`;

  const [{ insertId }] = await connection.execute(InsertNewProduct, [
    name,
    quantity,
  ]);

  return {
    id: insertId,
    name,
    quantity,
  };
};

module.exports = {
  getAllProducts,
  getByIdProducts,
  getByName,
  createProducts,
};
