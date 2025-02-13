import {Page} from 'playwright';
import {expect} from "@playwright/test";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    async bankManagerLogin() {
        await this.page.getByRole('button', {name: 'Bank Manager Login'}).click();
    }

    async goToHomePage() {
        await this.page.getByRole('button', {name: 'Home'}).click();
    }

    async existingCustomerLogin() {
        await this.page.getByRole('button', {name: 'Customer Login'}).click();
        await this.page.locator('#userSelect').selectOption('1');
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

    async customerLogin(firstName: string, lastName: string) {
        const fullName = [firstName, lastName].join(" ");
        await this.page.getByRole('button', {name: 'Customer Login'}).click();
        await this.page.selectOption('select#userSelect', {label: fullName});
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

    async validateLoginPage() {
        await (this.page.getByRole('button', {name: 'Customer Login'})).waitFor({state: 'visible'})
        expect(await this.page.screenshot()).toMatchSnapshot('login.png');
        await this.page.screenshot({path:'login.png'});
    }
}