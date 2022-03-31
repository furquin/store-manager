const express = require('express');
const productsRoutes = require('./routes/products');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
