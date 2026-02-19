import PurchaseFlow from '../flows/Purchase.flow.js';

describe('Suite Adicionar produto ao carrinho', () => {

  let configData;
  let purchaseFlow;

  before(() => {
    cy.task('readYaml', 'cypress/fixtures/env.yaml')
      .then((data) => {
        configData = data;
        purchaseFlow = new PurchaseFlow();
      });
  });

  it('CT01 - Deve adicionar produto ao carrinho', () => {

    cy.visit(configData.baseUrl);

    const quantity = configData.browser.quantity;

    purchaseFlow.executeLogin(configData.users.valid);
    purchaseFlow.addProduct(configData.products.default);
    purchaseFlow.validateCart(quantity);

  });

});
