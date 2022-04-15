import '@testing-library/cypress/add-commands'
// ***********************************************
/// <reference types="cypress" />
// import 'cypress'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* ======================================= */
function getByTestId(id: string) {
    return cy.get('[data-testid="' + id + '"]').should('be.visible')
}
Cypress.Commands.add('getByTestId', getByTestId)
/* ======================================= */
 
