// Generated from: tests/features/customer-operations.feature
import { test } from "../../../tests/pages/bankFixture.ts";

test.describe('Customer Operations', () => {

  test('Make deposit to existing account', async ({ Given, LoginPage, When, And, CustomerPage, Then }) => { 
    await Given('I am on the login page', null, { LoginPage }); 
    await When('I login as customer', null, { LoginPage }); 
    await And('I deposit "100" to my account', null, { CustomerPage }); 
    await Then('I see account balance successfully updated', null, { CustomerPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/customer-operations.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login as customer","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I deposit \"100\" to my account","stepMatchArguments":[{"group":{"start":10,"value":"\"100\"","children":[{"start":11,"value":"100","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I see account balance successfully updated","stepMatchArguments":[]}]},
]; // bdd-data-end