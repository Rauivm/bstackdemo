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

validateSubtotal(expectedQuantity) {

  cy.get('@productPrice').then(price => {

    // Extrai apenas número do preço (ex: 799.00)
    const unitPrice = parseFloat(
      price.match(/[\d,.]+/)[0].replace(',', '')
    );

    const expectedSubtotal = (unitPrice * expectedQuantity).toFixed(2);

    cy.get('.float-cart__footer')
      .invoke('text')
      .then(footerText => {

        const subtotalText = footerText.match(/[\d,.]+/)[0];
        const actualSubtotal = parseFloat(
          subtotalText.replace(',', '')
        ).toFixed(2);

        expect(actualSubtotal).to.equal(expectedSubtotal);

      });

    });
  }

  validateCheckoutEnabled() {
    cy.get('.float-cart__footer .buy-btn')
      .should('be.visible');
  }

}

export default new CartPage();
