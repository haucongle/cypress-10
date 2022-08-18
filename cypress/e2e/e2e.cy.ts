describe('empty spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/');
    cy.contains('Vite');
    cy.contains('React');
    cy.get('.card').find('button').should('have.text', 'count is 0');
    cy.contains('count').click();
    cy.get('.card').find('button').should('not.have.text', 'count is 0');
    cy.get('.card').find('button').should('have.text', 'count is 1');
  })
})

export {}
