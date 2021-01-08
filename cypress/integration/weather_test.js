describe('Weather test', () => {
  it('Tests the weather app', () => {
    cy.visit('/');
    cy.get('form').within(() => {
      cy.get('input[name^="city"]').type('Baltimore');
      cy.get('input[name^="country"]').type('United States');
      cy.root().submit();
    });
    cy.get('p[class^="weather__key"]').contains('Location:').should('be.visible');
    cy.get('span[class^="weather__value"]').contains('Baltimore, US').should('be.visible');
  });
});
