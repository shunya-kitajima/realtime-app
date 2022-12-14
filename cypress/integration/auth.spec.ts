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
  it('Shall navigate to Auth when logout clicked', () => {
    cy.get('input[placeholder="Email"]').type('user1@test.com')
    cy.get('input[placeholder="Password"]').type('password')
    cy.get('[type="submit"]').click()
    cy.get('[data-testid="logout"]').should('be.visible')
    cy.get('[data-testid="logout"]').click()
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
  })
  it('Shall not navigate to DashBoard when wrong credentials', () => {
    cy.get('input[placeholder="Email"]').type('user1@test.com')
    cy.get('input[placeholder="Password"]').type('pass')
    cy.get('[type="submit"]').click()
    cy.get('[data-testid="logout"]').should('not.exist')
  })
  // it('Shall navigate to DashBoard when successfully registered', () => {
  //   cy.get('input[placeholder="Email"]').type('user4@test.com')
  //   cy.get('input[placeholder="Password"]').type('password')
  //   cy.contains('change mode ?').click()
  //   cy.get('[type="submit"]').should('have.text', 'Register')
  //   cy.get('[type="submit"]').click()
  //   cy.get('input[placeholder="Username"]').should(
  //     'have.value',
  //     'user4@test.com'
  //   )
  // })
})
export {}
