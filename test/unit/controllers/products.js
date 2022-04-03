const { expect } = require("chai");
const sinon = require("sinon");
const productsControllers = require("../../../controllers/products")
const productServices = require("../../../services/products")

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

describe('testa funções productsControllers', () => {
  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.end = sinon.stub().returns();

    sinon.stub(productServices, "getAllProducts").resolves(products);
    sinon.stub(productServices, "getByIdProducts").resolves(product);
    sinon.stub(productServices, "createProducts").resolves(productCreated);
    sinon.stub(productServices, "updateProduct").resolves(productUpdated);
    sinon.stub(productServices, "deleteByIdProducts").resolves();
  })

  after(() => {
    productServices.getAllProducts.restore();
    productServices.getByIdProducts.restore();
    productServices.createProducts.restore();
    productServices.updateProduct.restore();
    productServices.deleteByIdProducts.restore();
  })

  describe('testa função getAllProducts', () => {
    it(' ao chamar retorna array de objetos e status 200', async () => {
      await productsControllers.getAllProducts(req, res);

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(products)).to.be.true
    })
  })

  describe('testa função getByIdProducts', () => {
    it('ao chamar retorna um objeto com status', async () => {
      req.params = 1

      await productsControllers.getByIdProducts(req, res);

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(product)).to.be.true
    })
  })

  describe('testa função createProducts', () => {
    it(' ao chamar retorna o objeto criado', async () => {
      req.body = { name: 'laert', quantity: 5 }

      await productsControllers.createProducts(req, res)

      expect(res.status.calledWith(201)).to.be.true
      expect(res.json.calledWith(productCreated)).to.be.true
    })
  })

  describe('testa função updateProduct', () => {
    it('ao chamar retorna o objeto atualizado com status 200', async () => {
      req.params = 3
      req.body = { name: 'furquin', quantity: 20 }

      await productsControllers.updateProduct(req, res)

      expect(res.status.calledWith(200)).to.be.true
      expect(res.json.calledWith(productUpdated)).to.be.true
    })
  })

  describe('testa função deleteByIdProducts', () => {
    it('ao chamar verifica se a função foi chamada', async () => {
      await productsControllers.deleteByIdProducts(req, res)

      expect(res.status.calledWith(204)).to.be.true
      expect(res.end.calledOnce).to.be.true
    })
  })
})
