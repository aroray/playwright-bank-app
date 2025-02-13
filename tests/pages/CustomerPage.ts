import {type Page, expect, Locator} from "@playwright/test";
import assert = require("assert");

export class CustomerPage {
    private page: Page;
    accountBalance: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountBalance = page.locator("div:nth-of-type(2) > strong:nth-of-type(2)");
    }

    async depositAmount(deposit: string) {
        let balance: number;
        await this.page.getByRole('button', {name: 'Deposit'}).click();
        balance = Number(await this.accountBalance.textContent());
        let expectedBalance: string = (balance + Number(deposit)).toString();
        console.log("Current deposit is :" + balance);
        await this.page.evaluate((amount) => {
            localStorage.setItem('balance', amount);
        }, expectedBalance);
        await this.page.getByPlaceholder('amount').fill(deposit);
        await this.page.getByRole('form').getByRole('button', {name: 'Deposit'}).click();
    }

    async verifyBalanceUpdated() {
        await expect(this.page.getByText('Deposit Successful')).toBeVisible();
        const balance = await this.page.evaluate(() => {
            return localStorage.getItem('balance');
        });
        await expect(this.page.getByText(balance)).toBeVisible();
        let currentBalance = await this.accountBalance.textContent();
        console.log("Updated balance should be :" + balance);
        assert.equal(currentBalance, balance);
    }
}