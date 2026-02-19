import PurchaseFlow from '../flows/Purchase.flow.js';
describe('Suite Adicionar produto ao carrinho', () => {

  let configData;

  before(() => {
    cy.task('readYaml', 'cypress/fixtures/env.yaml')
      .then((data) => {
        configData = data;
      });
  });

  it('Deve adicionar um produto dinamicamente e validar o carrinho', () => {

    cy.visit(configData.baseUrl);

    PurchaseFlow.executeLogin(configData.users.valid);
    PurchaseFlow.addProduct(configData.browser.defaultProductIndex);
    PurchaseFlow.validateCart();

  });

});
