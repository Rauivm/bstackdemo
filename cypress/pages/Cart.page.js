class CartPage {

  validateDrawerVisible() {
    cy.get('.float-cart').should('be.visible');
  }

  validateQuantity(expected) {
    cy.get('.bag__quantity').should('have.text', expected);
  }

  validateProductName() {
    cy.get('@productName').then(name => {
      cy.get('.float-cart__content')
        .should('contain', name);
    });
  }

  validateSubtotal() {
    cy.get('@productPrice').then(price => {

      const priceNumber = price.match(/[\d,.]+/)[0];

      cy.get('.float-cart__footer')
        .invoke('text')
        .then(footerText => {
          const footerNumber = footerText.match(/[\d,.]+/)[0];
          expect(footerNumber).to.equal(priceNumber);
        });

    });
  }

  validateCheckoutEnabled() {
    cy.get('.float-cart__footer .buy-btn')
      .should('be.visible');
  }

}

export default new CartPage();
