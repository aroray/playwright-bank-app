import {test} from '../../tests/pages/bankFixture';
import {createBdd} from 'playwright-bdd';

const {Given, When, Then} = createBdd();

// @ts-ignore
When('I open new account with currency {string} for existing customer and see message {string}', async ({ManagerPage}, currency: string, message: string) => {
    await ManagerPage.goToOpenAccountSection();
    await ManagerPage.openAccountForExistingCustomer(currency, message)
});

// @ts-ignore
When('Customer record is updated with new account number', async ({ManagerPage}, arg) => {
    await ManagerPage.confirmAccountNumberInCustomerTable();
});