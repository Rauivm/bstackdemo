import PurchaseFlow from '../flows/Purchase.flow';

describe('Suite Adicionar produto ao carrinho', () => {

  let configData;
  let purchaseFlow = new PurchaseFlow();

  before(() => {
    cy.fixture('env.json').then((data) => {
      configData = data;
    });
  });

  it('CT03 - Deve adicionar produto ao carrinho', () => {
    cy.allure().feature('Compra');
    cy.allure().story('Adicionar produto ao carrinho');
    cy.allure().severity('critical');
    cy.allure().tag('purchase', 'positive');
    cy.allure().description('Este teste valida o processo de adicionar um produto ao carrinho, garantindo que o item seja adicionado corretamente e que as informações do carrinho sejam atualizadas de acordo.');
    cy.allure().step('Abrir a página inicial');
    cy.visit(configData.baseUrl);
    cy.allure().step('Realizar login com usuário válido');
    purchaseFlow.executeLogin(configData.users.valid);
    cy.allure().step('Validar que o usuário está autenticado');
    cy.contains('Logout').should('be.visible');
    cy.allure().step('Adicionar produto ao carrinho');
    const quantity = configData.browser.quantity;
    purchaseFlow.addProduct(configData.products.default);
    cy.allure().step('Validar que o produto foi adicionado ao carrinho');
    purchaseFlow.validateCart(quantity);

  });

});