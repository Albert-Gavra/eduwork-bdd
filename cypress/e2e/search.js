import SearchForm from "./search.form";
import LoginPage from "./login.page";

const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I login and should see homepage', () => {
    LoginPage.visit();
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
})

When('I input word "Bank" in search form', () => {
    SearchForm.fillSearch('Bank');
})

Then('I see the result of word "Bank"', () => {
    SearchForm.checkSearch('Bank')
})