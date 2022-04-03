const productServices = require('../../../services/products')
const productsModels = require('../../../models/products')

const sinon = require('sinon')
const { expect } = require('chai')


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


describe('testa funções serviceProduct ', () => {

  before(() => {
    sinon.stub(productsModels, 'getAllProducts').resolves(products)
    sinon.stub(productsModels, "getByIdProducts").resolves(product)
    sinon.stub(productsModels, "createProducts").resolves(product)
    sinon.stub(productsModels, "updateProduct").resolves(product)
    sinon.stub(productsModels, "deleteByIdProducts");
  });

  after(() => {
    productsModels.getAllProducts.restore()
    productsModels.getByIdProducts.restore();
    productsModels.createProducts.restore();
    productsModels.updateProduct.restore();
    productsModels.deleteByIdProducts.restore();

  })
  describe("testa função getAllProducts", () => {
    it("ao chamar função retorna array de  objetos", async () => {
      const result = await productServices.getAllProducts();

      expect(result).to.be.equals(products)
    });
  });

  describe("testa função getByIdProducts", () => {
    it("ao chamar retorna um objeto", async () => {
      const result = await productServices.getByIdProducts(1)

      expect(result).to.be.equals(product)
    })
  })

  describe("testa função createProducts", () => {
    it("ao chamar retorna o objeto criado", async () => {
      const result = await productServices.createProducts('laert', 5)

      expect(result).to.be.equals(productCreated);
    })
  })

  describe("testa função updateProduct", () => {
    it("ao chamar retorna o objeto atualizado", async () => {
      const result = await productServices.updateProduct(3, 'furquin', 20)

      expect(result).to.be.equals(productUpdated);
    })
  })

  describe("testa função deleteByIdProducts", () => {
    it("testa se função de delete foi chamada", async () => {
      const result = await productServices.deleteByIdProducts(1)

      expect(productsModels.deleteByIdProducts.calledOnce).to.be.true
    })
  })
})
