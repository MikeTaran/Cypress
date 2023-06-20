//
describe('test description', () => {
    it('should do register user', () => {

        cy.visit('http://localhost:3000/apps/tesla.html');
        cy.get('form.registration input[name=first_name]').type('Mike');
        cy.get('form.registration input[name=last_name]').type('Taran');
        cy.get('form.registration input[name=email]').type('test@test.com');
        cy.get('form.registration input[name=password]').type('test');
        cy.get('form.registration button[type=submit]').click();
        cy.get('.main .success').should('exist');

    });
    it('should do login user', () => {
        cy.visit('http://localhost:3000/apps/tesla.html');
       // cy.visit('http://localhost:3000/apps/tesla.html?lang=en');
        cy.get('form.login input[name=email]').type('test@test.com');
        cy.get('form.login input[name=password]').type('test');
        //cy.get('form.login button[type=submit]').click();
        cy.contains('Войти').click();
        cy.get('.main .success').should('exist');
    });
    it('should do check copyrights', () => {

        // TODO: should be p[data-cy=copyrights]
        // we can use contains
        cy.contains('Все права защищены').should('be.visible');
        // or exact hierarchy
        cy.get('body > div > footer p').should('have.text', 'Все права защищены.');
    
    });


});