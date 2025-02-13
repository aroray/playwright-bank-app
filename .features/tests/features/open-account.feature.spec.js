// Generated from: tests/features/open-account.feature
import { test } from "../../../tests/pages/bankFixture.ts";

test.describe('Bank Manager Operations - Open Account', () => {

  test('Open an account for existing customer', async ({ Given, LoginPage, When, Then, ManagerPage, And }) => { 
    await Given('I am on the login page', null, { LoginPage }); 
    await When('I login as Bank Manager', null, { LoginPage }); 
    await Then('I open new account with currency "Pound" for existing customer and see message "Account created successfully with account Number"', null, { ManagerPage }); 
    await And('Customer record is updated with new account number', null, { ManagerPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/open-account.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I login as Bank Manager","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I open new account with currency \"Pound\" for existing customer and see message \"Account created successfully with account Number\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Pound\"","children":[{"start":34,"value":"Pound","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":79,"value":"\"Account created successfully with account Number\"","children":[{"start":80,"value":"Account created successfully with account Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And Customer record is updated with new account number","stepMatchArguments":[]}]},
]; // bdd-data-end