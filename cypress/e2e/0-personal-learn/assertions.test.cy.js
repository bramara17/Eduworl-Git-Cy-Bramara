/// <reference types="cypress" />

//Latihan materi assertion eduwork
// describe ('Browser actions',() =>{
    
//     it('Should load correct url', () => {
//         cy.visit('https://example.com', {timeout: 10000})
//     });
//     it('Should check correct url', () => {
//         cy.url().should('include','example.com')
//     });
//     it('Should check for correct element on the page', () => {
//         cy.get('h1').should('be.visible');
//     });
// });

//Tugas Materi Assertion Eduwork
describe ('My First Test',() =>{
    
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
        .type('bram@mail.id')
        .should('have.value','bram@mail.id')
    });
});