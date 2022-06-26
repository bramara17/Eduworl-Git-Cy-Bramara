/// <reference types="cypress" />

describe ('Working with inputs',() =>{
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html',{timeout: 10000})
        cy.url().should('include','login.html')
    });
    
    it('Should try to login', () => {
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password
            cy.login(username,password)
            //cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
        })
    });
    it('Pay Bills', () => {
        cy.fixture("user").then(user=>{
            const username = user.username
            const password = user.password
            const amount = user.amount
            const date = user.date
            const description = user.description
            cy.get('a').contains('Pay Bills').click() 

            //setelah click tab entah kenapa balik lagi ke halaman login
            //jika dilakukan secara manual bisa langsung ke halaman berikutnya tanpa harus login

            cy.login2(username,password)
            cy.paybills(amount,date,description)
        })
    });
});