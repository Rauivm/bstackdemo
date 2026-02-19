class ProductsPage {

  selectProductByIndex(index) {
    cy.get('.shelf-item').eq(index).within(() => {
      cy.get('.shelf-item__title')
        .invoke('text')
        .then(name => cy.wrap(name.trim()).as('productName'));

      cy.get('.shelf-item__price')
        .invoke('text')
        .then(price => {
          const normalized = price.replace(/\s/g, '');
          cy.wrap(normalized).as('productPrice');
        });

      cy.contains('Adicionar ao carrinho').click();
    });
  }

}

export default new ProductsPage();
