/// <reference types="cypress" />

describe ('My First Test',() =>{
    //coba tutor video eduwork
    // it('Visit the Kitchen Sink', () => {
    //     cy.visit('https://example.cypress.io')
    //     cy.get('h1').contains('Kitchen Sink')
    //     cy.contains('get').click()
    //     cy.url().should('include','/commands/querying')
    // });

    //Tugas 2 - Section 5 Test Script Cypress
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        // cy.pause()

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
        .type('bram@mail.id')
        .should('have.value','bram@mail.id')
    });
});