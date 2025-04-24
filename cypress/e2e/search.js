const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I login and open homepage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
    cy.get('#account_summary_tab > a').should('be.visible');
})

When('I input word "Bank" in search form', () => {
    cy.get('#searchTerm').type('Bank{enter}');
})

Then('I see the result of word "Bank"', () => {
    cy.contains('The following pages were found for the query: ').should('include.text', 'bank');
})