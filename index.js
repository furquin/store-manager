const express = require('express');
const productsRoutes = require('./routes/products');
const salesRoutes = require('./routes/sales');
const error = require('./middlewares/error');

require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);
app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
