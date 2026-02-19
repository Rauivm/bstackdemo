import LoginFlow from '../flows/Login.flow.js';

describe('Suite Login', () => {

  let configData;
  let loginFlow;

  before(() => {
    cy.task('readYaml', 'cypress/fixtures/env.yaml')
      .then((data) => {
        configData = data;
        loginFlow = new LoginFlow();
      });
  });
  
  beforeEach(() => {
    cy.visit(configData.baseUrl);
  });

  it('CT01 - Deve fazer login com credenciais válidas', () => {

    loginFlow.executeLogin(configData.users.valid);
    cy.contains('Logout').should('be.visible');

  });

  it('CT02 - Não deve fazer login com credenciais inválidas', () => {

    loginFlow.executeLogin(configData.users.invalid);
    cy.contains('Invalid Password').should('be.visible');

    });
});
