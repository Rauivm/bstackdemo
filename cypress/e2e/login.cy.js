import LoginFlow from '../flows/Login.flow.js';

describe('Suite Login', () => {

  let configData;
  let loginFlow;

  before(() => {
    cy.fixture('env.json').then((data) => {
        configData = data;
        loginFlow = new LoginFlow();
      });
  });
  
  beforeEach(() => {
    cy.visit(configData.baseUrl);
  });

  it('CT01 - Deve fazer login com credenciais válidas', () => {
    cy.allure().feature('Autenticação');
    cy.allure().story('Login com credenciais válidas');
    cy.allure().severity('critical');
    cy.allure().tag('login', 'positive');
    cy.allure().description('Este teste valida o processo de login utilizando credenciais válidas, garantindo que o usuário consiga acessar sua conta com sucesso.');

    cy.visit('/');
    cy.allure().step('Realizar login com usuário válido');
    loginFlow.executeLogin(configData.users.valid);
    cy.allure().step('Validar que o usuário está autenticado');
    cy.contains('Logout').should('be.visible');
  });

  it('CT02 - Não deve fazer login com credenciais inválidas', () => {
    cy.allure().feature('Autenticação');
    cy.allure().story('Login com credenciais inválidas');
    cy.allure().severity('normal');
    cy.allure().tag('login', 'negative');
    cy.allure().description('Este teste valida o processo de login utilizando credenciais inválidas, garantindo que o sistema exiba a mensagem de erro apropriada e não permita o acesso.');

    cy.visit('/');
    cy.allure().step('Realizar login com usuário inválido');
    loginFlow.executeLogin(configData.users.invalid);
    cy.allure().step('Validar que a mensagem de erro é exibida');
    cy.contains('Invalid Password').should('be.visible');
  });

});
