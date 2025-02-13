import {test} from '../../tests/pages/bankFixture';
import {createBdd} from 'playwright-bdd';

const {Given, When, Then} = createBdd();


// @ts-ignore
Given('I am on the login page', async ({LoginPage}) => {
    await LoginPage.navigateTo();

});

// @ts-ignore
When('I login as Bank Manager', async ({LoginPage}) => {
    await LoginPage.bankManagerLogin();
});

// @ts-ignore
When('I go to home page', async ({LoginPage}) => {
    await LoginPage.goToHomePage();
});

// @ts-ignore
When('I login as customer', async ({LoginPage}) => {
    await LoginPage.existingCustomerLogin();
});

// @ts-ignore
When('I login as customer with {string} {string}', async ({LoginPage}, firstname: string, lastname: string) => {
    await LoginPage.customerLogin(firstname, lastname);
});

// @ts-ignore
Then('I validate login page', async ({LoginPage}) => {
    await LoginPage.validateLoginPage();
});

