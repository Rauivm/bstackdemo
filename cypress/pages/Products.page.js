class ProductsPage {

  selectProductByName(productName) {

    cy.contains('.shelf-item', productName)
      .within(() => {

        cy.get('.shelf-item__title')
          .invoke('text')
          .then(name => cy.wrap(name.trim()).as('productName'));

        cy.get('.shelf-item__price')
          .invoke('text')
          .then(price => {
            const normalized = price.replace(/\s/g, '');
            cy.wrap(normalized).as('productPrice');
          });

        cy.contains('Add to cart').click();
      });

  }

}

export default new ProductsPage();