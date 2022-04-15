/// <reference types="cypress" />
/* =============================== */
describe('integaratedTest1', () => {
    before(() => {
        cy.viewport('iphone-8')
        cy.visit('/')
    })
    it('add a New Todo', { scrollBehavior: 'bottom' }, () => { /* Note:putting async here will cause cy to fail in headless and in gui a silent crash(u will see errors but wont see failed test) */
        cy.getByTestId('plusMenu-btn').click()
        cy.getByTestId('btn1-btn').click()
        const todoTitle = 'asdjankjsdn'
        addNewTodo(todoTitle)
    })
})  
/* =================================================== */
function addNewTodo(todoTitle:string) {
    cy.getByTestId('title').type(todoTitle)
    cy.getByTestId('comments').type('asd')
    cy.getByTestId('add-btn').should('not.be.disabled')
    cy.getByTestId('add-btn').click()
    cy.getByTestId('Dashboard').contains(todoTitle).should('be.visible')
    // cy.getByTestId('foundedUsers-flatlist')
    //     .should('be.visible')
    //     .contains(todoTitle)
    //     .should('be.visible')
}
/* =================================================== */

