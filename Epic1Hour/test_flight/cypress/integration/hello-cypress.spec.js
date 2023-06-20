/// <reference types="cypress" />
// перехват ошибки
Cypress.on('uncaught:exception', () => false);
it('should suscribe to news letter', () => {
    cy.visit('https://www.cypress.io');
    cy.get('.footer-form > .border').click({force: true});
    cy.wait(1000);
    cy.get('#subscribe_email').type('mtaran@ukr.net');
    cy.get('.border-t > .border').click();
    cy.get('.w-full > .font-primary').should('have.text', 'Thank you for subscribing!')
});