describe('`index` start app', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('Renders without crashing', () => {
    cy.clock();
    cy.get('input').type('zootopia');
    cy.get('[class*=style_search-button]').click();
    cy.get('[class*=style_by-title]').click();
    cy.tick(15000);
    cy.get('[class*=style_title]')
      .first()
      .should('to.have.html', 'Zootopia');
  });
});
