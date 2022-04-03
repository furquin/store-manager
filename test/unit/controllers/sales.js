const { expect } = require("chai");
const { it } = require('mocha');
const sinon = require("sinon");

const salesControllers = require("../../../controllers/sales");
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

describe('testa funções salesControllers', () => {

  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.end = sinon.stub().returns();

    sinon.stub(salesServices, 'getAllSales').resolves(sales);
    sinon.stub(salesServices, 'getSaleById').resolves(sale);
    sinon.stub(salesServices, "createSales").resolves(saleCreated);
    sinon.stub(salesServices, "updateSales").resolves(saleUpdated);
    sinon.stub(salesServices, 'deleteSales').resolves();
  })

  after(() => {
    salesServices.getAllSales.restore();
    salesServices.getSaleById.restore();
    salesServices.createSales.restore();
    salesServices.updateSales.restore();
    salesServices.deleteSales.restore();
  })

  describe('testa função getAllSales', () => {

    it('ao chamar retorna array de vendas com status 200', async () => {
      await salesControllers.getAllSales(req, res)

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(sales)).to.be.true
    })
  })

  describe('testa função getSaleById', () => {
    it('ao chamar retorna um array com produtos da venda', async () => {
      req.params = 1;

      await salesControllers.getSaleById(req, res)

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(sale)).to.be.true
    })
  })

  describe('testa função createSales', () => {
    it('ao chamar retorna um array com venda cria e status 201', async () => {
      req.body = { productId: 1, quantity: 9 }

      await salesControllers.createSales(req, res)

      expect(res.status.calledWith(201)).to.be.true
      expect(res.json.calledWith(saleCreated)).to.be.true
    })
  })

  describe('testa função updateSales', () => {
    it('ao chamar retorna um array com objeto atualizado e status 200', async () => {
      req.params = 1
      req.body = { productId: 1, quantity: 5 }

      await salesControllers.updateSales(req, res)

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(updatedSales)).to.be.true
    })
  })

  describe('testa função deleteSales', () => {
    it('verifica se a função foi chamada', async () => {
      req.params = 1
      await salesControllers.deleteSales(req, res)

      expect(res.status.calledWith(204)).to.be.true
      expect(res.end.calledOnce).to.be.true

    })
  })
})
