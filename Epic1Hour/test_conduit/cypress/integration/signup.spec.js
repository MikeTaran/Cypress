/// <reference types="cypress" />
describe("Sign Up", () => {
  it("Should do register user", () => {
    //Open https://demo.realworld.io/
    cy.visit("https://demo.realworld.io");
    // Click Sign in link in app header
    cy.get('.navbar a[href$="/register"]').click();
    // Url path should be /#/login
    cy.url().should("include", "/#/register");
    // Page heading should be Sign in
    cy.get(".auth-page h1").should("have.text", "Sign up");
    // Page should have form
    cy.get(".auth-page form").should("be.visible");
    // generate random integer from 1000 to 9999
    const rnd = Math.round(Math.random() * 8999) + 1000;
    // username was not registered before
    const username = "user_" + rnd;
    // email was not registered before
    const email = username + "@gmail.com";
    // type username form field
    cy.get(".auth-page form input[ng-model$=username]").type(username);
    // type email form field
    cy.get(".auth-page form input[ng-model$=email]").type(email);
    // password should be with pattern [0-9a-zA-Z_]{6, 16}
    // type password form field
    cy.get(".auth-page form input[ng-model$=password]").type("xyzXYZ123_");
    // click on Sign up button
    cy.get(".auth-page form button[type=submit]").click();
    // header should contains {username}
    cy.get(".navbar").should("contain.text", username);
  });
  it("", () => {
    //TODO: write test body later
    //Open https://demo.realworld.io/
    cy.visit("https://demo.realworld.io");
    // Click Sign in link in app header
    cy.get('.navbar a[href$="/login"]').click();
    // Url path should be /#/login
    cy.url().should("include", "/#/login");
    // Page heading should be Sign in
    cy.get(".auth-page h1").should("have.text", "Sign in");
    // Page should have form
    cy.get(".auth-page form").should("be.visible");
    // type email form field
    cy.get(".auth-page form input[ng-model$=email]").type(
      "user_2774@gmail.com"
    );
    // password should be with pattern [0-9a-zA-Z_]{6, 16}
    // type password form field
    cy.get(".auth-page form input[ng-model$=password]").type("xyzXYZ123_");
    // click on Sign up button
    cy.get(".auth-page form button[type=submit]").click();
    // header should contains {username}
    cy.get(".navbar").should("contain.text", "user_2774");
  });
  it('should do logout user', () => {
    //Open https://demo.realworld.io/
    cy.visit("https://demo.realworld.io");
    // Click Sign in link in app header
    cy.get('.navbar a[href$="/login"]').click();
    // Url path should be /#/login
    cy.url().should("include", "/#/login");
    // Page heading should be Sign in
    cy.get(".auth-page h1").should("have.text", "Sign in");
    // Page should have form
    cy.get(".auth-page form").should("be.visible");
    // type email form field
    cy.get(".auth-page form input[ng-model$=email]").type(
      "user_2774@gmail.com"
    );
    // password should be with pattern [0-9a-zA-Z_]{6, 16}
    // type password form field
    cy.get(".auth-page form input[ng-model$=password]").type("xyzXYZ123_");
    // click on Sign up button
    cy.get(".auth-page form button[type=submit]").click();
    // header should contains {username}
    cy.get(".navbar").should("contain.text", "user_2774");
    //
    // 1. Click `Settings` link in app header
    cy.get('.navbar a[href$="/settings"]').click();
    // 2. Url path should be `/#/settings`
    cy.url().should("include", "/#/settings");
    // 3. Page heading should be `Your Settings`
    cy.get(".settings-page h1").should("have.text", "Your Settings");
    // 4. Click on `Or click here to logout.` button at the page bottom
    cy.get('.settings-page button[ng-click*=logout]').click();
    // 5. Header should not contains `{username}`
    cy.get(".navbar").should("not.contain.text", "user_2774");
    
  });
});
