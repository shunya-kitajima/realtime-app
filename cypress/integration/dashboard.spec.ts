/// <reference types="cypress"/>
describe('DashBoard', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Shall Post/Comment CRUD works fine', () => {
    cy.get('input[placeholder="Email"]').type('user1@test.com')
    cy.get('input[placeholder="Password"]').type('password')
    cy.get('[type="submit"]').click()
    cy.get('[data-testid="logout"]').should('be.visible')

    cy.get('input[placeholder="New Post ?"]').type('Post A')
    cy.get('[data-testid="btn-post"]').click()
    cy.get('[data-testid="ul-post"]').children().should('have.length', 1)
    cy.get('[data-testid="ul-post"]').children().should('have.text', 'Post A')
    cy.get('[data-testid="pencil-post"]').click()
    cy.get('input[placeholder="New Post ?"]').type('++')
    cy.get('[data-testid="btn-post"]').click()
    cy.get('[data-testid="ul-post"]').children().should('have.text', 'Post A++')

    cy.get('[data-testid="open-comments"]').click()
    cy.get('input[placeholder="New Comment ?"]').should('be.visible')
    cy.get('input[placeholder="New Comment ?"]').type('Comment A')
    cy.get('[data-testid="btn-comment"]').click()
    cy.get('[data-testid="ul-comment"]').children().should('have.length', 1)
    cy.get('[data-testid="ul-comment"]')
      .children()
      .should('have.text', 'Comment A')
    cy.get('[data-testid="pencil-comment"]').click()
    cy.get('input[placeholder="New Comment ?"]').type('++')
    cy.get('[data-testid="btn-comment"]').click()
    cy.get('[data-testid="ul-comment"]')
      .children()
      .should('have.text', 'Comment A++')
    cy.get('[data-testid="trash-comment"').click()
    cy.get('[data-testid="ul-comment"]').children().should('have.length', 0)

    cy.get('input[placeholder="New Comment ?"]').should('be.visible')
    cy.get('input[placeholder="New Comment ?"]').type('Comment A')
    cy.get('[data-testid="btn-comment"]').click()
    cy.get('[data-testid="ul-comment"]').children().should('have.length', 1)
    cy.get('[data-testid="ul-comment"]')
      .children()
      .should('have.text', 'Comment A')

    cy.get('[data-testid="trash-post"]').click()
    cy.get('[data-testid="ul-post"]').children().should('have.length', 0)
    cy.get('[data-testid="ul-comment"]').children().should('have.length', 0)
  })
})
export {}
