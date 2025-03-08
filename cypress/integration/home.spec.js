describe('Home Page', () => {
  it('should display the home page correctly', () => {
    cy.visit('/');
    cy.contains('NontonX').should('be.visible');
  });

  it('should switch between dark mode and light mode', () => {
    cy.visit('/');
    cy.get('button').contains('Light Mode').click();
    cy.get('body').should('have.class', 'bg-white');
    cy.get('button').contains('Dark Mode').click();
    cy.get('body').should('have.class', 'bg-gray-900');
  });
});
