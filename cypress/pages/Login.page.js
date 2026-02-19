class LoginPage {

  openLogin() {
    cy.contains('Sign In').click();
  }

  login(username, password) {
    cy.get('#username').click().type(`${username}{enter}`);
    cy.get('#password').click().type(`${password}{enter}`);
    cy.get('#login-btn').click();
  }

}

export default new LoginPage();
