import {type Page, expect} from "@playwright/test";

export class ManagerPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToAddCustomerSection() {
        await this.page.getByRole('button', {name: 'Add Customer'}).click();
    }

    async createCustomer(firstName: string, lastName: string, postcode: string, message?: string) {
        //await this.page.getByRole('button', { name: 'Add Customer' }).click();
        await this.page.getByRole('textbox', {name: 'First Name'}).fill(firstName);
        await this.page.getByRole('textbox', {name: 'Last Name'}).fill(lastName);
        await this.page.getByRole('textbox', {name: 'Post Code'}).fill(postcode);
        if (message != undefined) {
            this.page.on('dialog', async (dialog) => {
                console.log(`Dialog detected: ${dialog.message()}`);
                await this.page.waitForTimeout(5000);
                expect(dialog.message()).toContain(message);
                await dialog.dismiss();
            });
        }
        await this.page.getByRole('form').getByRole('button', {name: 'Add Customer'}).click();
    }

    async verifyCustomerRecord(firstName: string, lastName: string, postcode: string) {
        await this.page.getByRole('button', {name: 'Customers'}).click();
        await this.page.getByRole('textbox', {name: 'Search Customer'}).fill(firstName);
        await expect(this.page.getByRole('cell', {name: firstName})).toBeVisible();
        await expect(this.page.getByRole('cell', {name: lastName})).toBeVisible();
        await expect(this.page.getByRole('cell', {name: postcode})).toBeVisible();
    }

    async goToOpenAccountSection() {
        await this.page.getByRole('button', {name: 'Open Account'}).click();
    }

    async openAccountForExistingCustomer(currency: String, message?: string) {
        await this.page.locator('#userSelect').selectOption('1');
        await this.page.locator('#currency').selectOption('Pound');
        let actualMessage: string;
        this.page.on('dialog', async (dialog) => {
            console.log(`Dialog detected: ${dialog.message()}`);
            await this.page.waitForTimeout(5000);
            expect(dialog.message()).toContain(message);
            actualMessage = dialog.message().split(":")[1].trim();
            await dialog.dismiss();
        });
        await this.page.getByRole('button', {name: 'Process'}).click();
        await this.page.evaluate((accountNumber) => {
            localStorage.setItem('accountNumber', accountNumber);
        }, actualMessage);
    }

    async confirmAccountNumberInCustomerTable() {
        const accountNumber = await this.page.evaluate(() => {
            return localStorage.getItem('accountNumber');
        });
        console.log("Verifying account number :" + accountNumber);
        await this.page.getByRole('button', {name: 'Customers'}).click();
        await expect(this.page.getByText(accountNumber)).toBeVisible();
    }
}