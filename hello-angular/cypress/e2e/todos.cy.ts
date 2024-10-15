describe('template spec', () => {
  it('passes', () => {
    cy.visit('/todos');

    cy.get('.form-control').type('My Todo', {delay: 500});
    cy.get('.btn').click();

    cy.get('app-todo-item:first-child').contains('My Todo');
  })
})
