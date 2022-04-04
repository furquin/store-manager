const productsModels = require("../../../models/products");
const connection = require("../../../models/connection");
const sinon = require("sinon");
const { expect } = require("chai");


const products = [
  {
    id: 1,
    name: "Martelo de Thor",
    quantity: 10,
  },
  {
    id: 2,
    name: "Traje de encolhimento",
    quantity: 20,
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
    quantity: 30,
  },
];

const product = [[{
  id: 1,
  name: "Martelo de Thor",
  quantity: 10,
}]];

const productCreated = [[{
  id: 4,
  name: "laert",
  quantity: 5,
}]];

const productUpdated = {
  id: 4,
  name: "furquin",
  quantity: 20,
};

describe("testa funções productsModels", () => {
  describe("testa função getAllProducts", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(products);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um array com produtos", async () => {
      const result = await productsModels.getAllProducts();
      const [productsIn] = products
      expect(result).to.be.equals(productsIn);
    });
  });

  describe("testa função getByIdProducts", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(product);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um objeto com produto", async () => {

      const [[productIn]] = product

      const result = await productsModels.getByIdProducts(1);

      expect(result).to.be.equals(productIn);
    });
  });

  describe("testa função createProducts", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([{insertId: 4}]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um objeto com produto criado", async () => {

      const [[productCreatedIn]] = productCreated
      const result = await productsModels.createProducts("laert", 5);

      expect(result).to.be.deep.equals(productCreatedIn);
    });
  });

  describe("testa função updateProduct", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(productUpdated);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um objeto com produto atualizado", async () => {


      const result = await productsModels.updateProduct(4, 'furquin', 20);
      expect(result).to.be.deep.equals(productUpdated);
    });
  });

  describe("testa função deleteByIdProducts", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves();
    });

    after(() => {
      connection.execute.restore();
    });

    it("verifica se a função foi chamada", async () => {
      await productsModels.deleteByIdProducts(1);

      expect(connection.execute.calledOnce).to.be.true;
    });
  });
});
