/// <reference types="cypress" />

describe ('Working with inputs',() =>{
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout: 10000})
        cy.url().should('include','login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

    });
    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('#user_remember_me').click()
        // cy.get('#user_password').clear()
        // cy.get('#user_password').type('password')
    });
});