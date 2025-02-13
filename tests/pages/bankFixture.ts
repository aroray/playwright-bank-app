import {test as base} from 'playwright-bdd';
import {LoginPage} from "./LoginPage";
import {ManagerPage} from "./ManagerPage";
import {CustomerPage} from "./CustomerPage";

type Fixtures = {
    LoginPage: LoginPage;
    ManagerPage: ManagerPage;
    CustomerPage: CustomerPage;

}

export const test = base.extend<Fixtures>({
    LoginPage: async ({page}, use) => use(new LoginPage(page)),
    ManagerPage: async ({page}, use) => use(new ManagerPage(page)),
    CustomerPage: async ({page}, use) => use(new CustomerPage(page)),
});

