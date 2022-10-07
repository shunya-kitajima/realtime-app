/// <reference types="cypress"/>
describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Shall navigate to DashBoard when successully login', () => {
    cy.get('input[placeholder="Email"]').type('user1@test.com')
    cy.get('input[placeholder="Password"]').type('password')
    cy.get('[type="submit"]').click()
    cy.get('[data-testid="logout"]').should('be.visible')
  })
})
export {}
