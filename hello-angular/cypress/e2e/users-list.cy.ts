describe('Users List Page', () => {
  it('should show Leanne Graham with real request', () => {
    cy.visit('/users')
    cy.contains('Leanne Graham')
  })

  it('should show Toto with intercept', () => {
    cy.intercept('https://jsonplaceholder.typicode.com/users', [{
      name: 'Toto',
    }])

    cy.visit('/users')

    cy.contains('Toto')
  })
})
