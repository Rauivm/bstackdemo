describe('Suite Smoke - Validação mínima da página inicial', () => {

  beforeEach(() => {
    cy.visit('/');
  });
  it('CT00 - Deve carregar a página inicial corretamente', () => {

    // Página carregada
    cy.url().should('include', 'bstackdemo');

    // Produtos renderizados
    cy.get('.shelf-item')
      .should('have.length.greaterThan', 0);

    // Botão Add to cart visível
    cy.contains('Add to cart')
      .should('be.visible');

    // Ícone do carrinho
    cy.get('.bag')
      .should('be.visible');

  });

});