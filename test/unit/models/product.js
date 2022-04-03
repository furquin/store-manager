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

const product = {
  id: 1,
  name: "Martelo de Thor",
  quantity: 10,
};

const productCreated = {
  id: 4,
  name: "laert",
  quantity: "5",
};

const productUpdated = {
  id: "3",
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

      expect(result).to.be.equals(products);
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
      const result = await productsModels.getByIdProducts(1);

      expect(result).to.be.equals(product);
    });
  });

  describe("testa função createProducts", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(productCreated);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um objeto com produto criado", async () => {
      const result = await productsModels.createProducts({
        name: "laert",
        quantity: 5,
      });

      expect(result).to.be.equals(productCreated);
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
      const result = await productsModels.updateProduct({
        id: 3,
        name: "furquin",
        quantity: 20,
      });

      expect(result).to.be.equals(productUpdated);
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

      expect(productsModels.deleteByIdProducts.calledOnce).to.be.true;
    });
  });
});
