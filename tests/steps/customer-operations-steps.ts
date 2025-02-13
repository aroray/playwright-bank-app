import {test} from '../../tests/pages/bankFixture';
import {createBdd} from 'playwright-bdd';

const {Given, When, Then} = createBdd();

// @ts-ignore
When('I deposit {string} to my account', async ({CustomerPage}, amount: string) => {
    await CustomerPage.depositAmount(amount);
});

// @ts-ignore
Then('I see account balance successfully updated', async ({CustomerPage}) => {
    await CustomerPage.verifyBalanceUpdated();
});
