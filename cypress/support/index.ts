// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="cypress" />

// Alternatively you can use CommonJS syntax:
// require('./commands')
/* =================================== */
/* https://docs.cypress.io/guides/tooling/typescript-support#Clashing-types-with-Jest */
/* =================================== */
declare global {
    export namespace Cypress {
        interface cy {
            // declare additional properties on "cy" object, like
            // label: string
        }
        interface Chainable {
            // declare additional custom commands as methods, like
            getByTestId(id: string): Cypress.Chainable<JQuery<HTMLElement>>
            clickOnTreeViewElementIfTreeViewExist(x: number, y: number): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}
    /* =================================== */
