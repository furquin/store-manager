
const { expect } = require("chai");
const sinon = require("sinon");

const salesModels = require("../../../models/sales");
const salesServices = require("../../../services/sales");

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

describe("testa funções serviceSales", () => {
  before(() => {
    sinon.stub(salesModels, "getAllSales").resolves(sales);
    sinon.stub(salesModels, "getSaleById").resolves(sale);
    sinon.stub(salesModels, "createSales").resolves(saleCreated);
    sinon.stub(salesModels, "updateSales").resolves(saleUpdated);
    sinon.stub(salesModels, "deleteSales").resolves();
  });

  after(() => {
    salesModels.getAllSales.restore();
    salesModels.getSaleById.restore();
    salesModels.createSales.restore();
    salesModels.updateSales.restore();
    salesModels.deleteSales.restore();
  });

  describe("testa função getAllSales", () => {
    it("ao chama retorna um array todas as vendas", async () => {
      const result = await salesServices.getAllSales();

      expect(result).to.be.equals(sales);
    });
  });

  describe("testa função getSaleByIds", () => {
    it("ao chamar retorna um array contendo os produtos daquela venda", async () => {
      const result = await salesServices.getSaleById(1);

      expect(result).to.be.equals(sale);
    });
  });

  describe("testa função createSales", () => {
    it("ao chamar retorna um novo array contendo os produtos da venda ", async () => {
      const result = await salesServices.createSales(1, 9);

      expect(result).to.be.equals(saleCreated);
    });
  });

  describe("testa função updateSales", () => {
    it("ao chamar retorna um array com valores atualizados", async () => {
      const result = await salesServices.updateSales(1, 1, 5);

      expect(result).to.be.equals(saleUpdated);
    });


  });

  describe("testa função deleteSales", () => {
    it("verifica se função foi chamada", async () => {
      await salesServices.deleteSales(1);

      expect(salesModels.deleteSales.calledOnce).to.be.true;
    });
  });
});
