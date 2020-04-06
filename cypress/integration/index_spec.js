describe('`index` start app', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('Renders without crashing', () => {
    cy.get('input').type('Hello, World');
  });
});
