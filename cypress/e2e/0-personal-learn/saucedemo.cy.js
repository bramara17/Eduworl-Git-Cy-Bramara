/// <reference types="cypress" />

// describe ('Login',() =>{
//     it('Visit the website', () => {
//         cy.visit('https://www.google.com/',{timeout: 10000})
//         //cy.pause()
//         cy.url().should('include','.com') 
//     });
// });
describe ('Login',() =>{
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/',{timeout: 10000})
        cy.url().should('include','saucedemo.com')
        
    });
    it('Should fill username', () => {
        cy.fixture("userSauce").then(userSauce =>{
            const uName = userSauce.ussr
            cy.get('#user-name').clear()
            cy.get('#user-name').type(uName)
        })
    });
    it('Should fill password', () => {
        cy.fixture("userSauce").then(userSauce =>{
            const uPass = userSauce.pswd
            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(uPass)
        })
    });
    it('Click login button', () => {
        cy.get('input[name="login-button"]').click()
        cy.url().should('include','/inventory.html')
    });
});

describe ('Checkout',() =>{
    it('Click Add To Cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    });

    it('Click Cart Icon', () => {
        cy.get('#shopping_cart_container').click()
        cy.url().should('include','cart.html')
    });
    it('Click Checkout Button', () => {
        cy.get('#checkout').click()
        //cy.pause()
        //cy.url().should('include','checkout-step-one.html')
        cy.pause()
    });
    
    it('Address form fill', () => {
        cy.fixture("userSauce").then(userSauce =>{
            const firstName = userSauce.fName
            const lastName= userSauce.lName
            const postal= userSauce.postalCode
            cy.get('#first-name').clear()
            cy.get('input[name="lastName"]').clear()
            cy.get('#postal-code').clear()
            cy.get('#first-name').type(firstName)
            cy.get('input[name="lastName"]').type(lastName)
            cy.get('#postal-code').type(postal)
        })
    });
    it('Click Continue button', () => {
        cy.get('#continue').click()
        cy.url().should('include','checkout-step-two.html')
    });
    it('Click Finish button', () => {
        cy.get('#finish').click()
        cy.url().should('include','checkout-complete.html')
    });
});



