import {test} from '../../tests/pages/bankFixture';
import {createBdd} from 'playwright-bdd';

const {Given, When, Then} = createBdd();
import {LoginPage} from "../pages/LoginPage";

// @ts-ignore
// Given('I am on the login page', async ({LoginPage}) => {
//
//     await LoginPage.navigateTo();
//
// });

// @ts-ignore
// When('I login as Bank Manager', async ({LoginPage}) => {
//     await  LoginPage.bankManagerLogin();
// });

// @ts-ignore
When('I add customer with {string} {string} {string}', async ({ManagerPage}, firstname: string, lastname: string, postcode: string, message?: string) => {
    await ManagerPage.goToAddCustomerSection();
    await ManagerPage.createCustomer(firstname, lastname, postcode);

});

// @ts-ignore
Then('I add customer with {string} {string} {string} and see {string}', async ({ManagerPage}, firstname: string, lastname: string, postcode: string, message: string) => {
    await ManagerPage.goToAddCustomerSection();
    await ManagerPage.createCustomer(firstname, lastname, postcode, message);

});

// @ts-ignore
Then('I add duplicate customer with {string} {string} {string} and see {string} in add customer page', async ({ManagerPage}, firstname: string, lastname: string, postcode: string, message: string) => {
    await ManagerPage.createCustomer(firstname, lastname, postcode, message);

});
// @ts-ignore
Then('I see new customer with {string} {string} {string} is added to the customer table', async ({ManagerPage}, firstname: string, lastname: string, postcode: string) => {
    await ManagerPage.verifyCustomerRecord(firstname, lastname, postcode);
});