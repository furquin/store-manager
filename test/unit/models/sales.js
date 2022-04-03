const salesModels = require("../../../models/sales");
const connection = require("../../../models/connection");
const sinon = require("sinon");
const { expect } = require("chai");

const sales = [
  {
    saleId: 1,
    date: "2022-04-02T23:43:20.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-04-02T23:43:20.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2022-04-02T23:43:20.000Z",
    productId: 3,
    quantity: 15,
  },
];

const sale = [
  {
    date: "2022-04-02T23:05:44.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2022-04-02T23:05:44.000Z",
    productId: 2,
    quantity: 10,
  },
];

const saleCreated = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 9,
    },
  ],
};

const saleUpdated = {
  saleId: "1",
  itemUpdated: [
    {
      productId: 1,
      quantity: 5,
    },
  ],
};

describe("testa funções salesModels", () => {

  describe("testa função getAllSales", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(sales);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um array (vendas) de objetos (produtos)", async () => {
      const result = await salesModels.getAllSales();

      expect(result).to.be.equals(sales);
    });
  });

  describe("testa função getSaleById", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(sale);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um array (venda) com objetos (produtos) ", async () => {
      const result = await salesModels.getSaleById(1);

      expect(result).to.be.equals(sale);
    });
  });

  describe("testa função createSales", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(saleCreated);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um array (venda) de objetos (produtos)", async () => {
      const result = await salesModels.createSales(1, 9);

      expect(result).to.be.equals(saleCreated);
    });
  });

  describe("testa função updateProduct", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves(saleUpdated);
    });

    after(() => {
      connection.execute.restore();
    });

    it("ao chamar retorna um array (venda ) de objetos atualizados (produtos)", async () => {
      const result = await salesModels.updateSales(1, 1, 5);

      expect(result).to.be.equals(saleUpdated);
    });
  });

  describe("testa função deleteSales", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves();
    });

    after(() => {
      connection.execute.restore();
    });

    it("verifica se a função foi chamada", async () => {
      await salesModels.deleteSales(1);

      expect(salesModels.deleteSales.calledOnce).to.be.true;
    });
  });
});
