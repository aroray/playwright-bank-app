// Generated from: tests/features/create-customer.feature
import { test } from "../../../tests/pages/bankFixture.ts";

test.describe('Bank Manager Operations - Create a Customer', () => {

  test.describe('Successful creation of a new customer and added to customer table', () => {

    test('Example #1', async ({ Given, LoginPage, And, When, Then, ManagerPage }) => { 
      await Given('I am on the login page', null, { LoginPage }); 
      await And('I validate login page', null, { LoginPage }); 
      await When('I login as Bank Manager', null, { LoginPage }); 
      await Then('I add customer with \'John\' \'Brown\' \'12345\' and see \'Customer added successfully with customer id\'', null, { ManagerPage }); 
      await And('I see new customer with \'John\' \'Brown\' \'12345\' is added to the customer table', null, { ManagerPage }); 
    });

  });

  test.describe('Attempt to create a duplicate customer', () => {

    test('Example #1', async ({ Given, LoginPage, When, Then, ManagerPage, And }) => { 
      await Given('I am on the login page', null, { LoginPage }); 
      await When('I login as Bank Manager', null, { LoginPage }); 
      await Then('I add customer with \'John\' \'Doe\' \'12345\'', null, { ManagerPage }); 
      await And('I add duplicate customer with \'John\' \'Doe\' \'12345\' and see \'Please check the details. Customer may be duplicate\' in add customer page', null, { ManagerPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/create-customer.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I validate login page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login as Bank Manager","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I add customer with 'John' 'Brown' '12345' and see 'Customer added successfully with customer id'","stepMatchArguments":[{"group":{"start":20,"value":"'John'","children":[{"children":[{"children":[]}]},{"start":21,"value":"John","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":27,"value":"'Brown'","children":[{"children":[{"children":[]}]},{"start":28,"value":"Brown","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"'12345'","children":[{"children":[{"children":[]}]},{"start":36,"value":"12345","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"'Customer added successfully with customer id'","children":[{"children":[{"children":[]}]},{"start":52,"value":"Customer added successfully with customer id","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I see new customer with 'John' 'Brown' '12345' is added to the customer table","stepMatchArguments":[{"group":{"start":24,"value":"'John'","children":[{"children":[{"children":[]}]},{"start":25,"value":"John","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"'Brown'","children":[{"children":[{"children":[]}]},{"start":32,"value":"Brown","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"'12345'","children":[{"children":[{"children":[]}]},{"start":40,"value":"12345","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I login as Bank Manager","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I add customer with 'John' 'Doe' '12345'","stepMatchArguments":[{"group":{"start":20,"value":"'John'","children":[{"children":[{"children":[]}]},{"start":21,"value":"John","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":27,"value":"'Doe'","children":[{"children":[{"children":[]}]},{"start":28,"value":"Doe","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"'12345'","children":[{"children":[{"children":[]}]},{"start":34,"value":"12345","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And I add duplicate customer with 'John' 'Doe' '12345' and see 'Please check the details. Customer may be duplicate' in add customer page","stepMatchArguments":[{"group":{"start":30,"value":"'John'","children":[{"children":[{"children":[]}]},{"start":31,"value":"John","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"'Doe'","children":[{"children":[{"children":[]}]},{"start":38,"value":"Doe","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"'12345'","children":[{"children":[{"children":[]}]},{"start":44,"value":"12345","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"'Please check the details. Customer may be duplicate'","children":[{"children":[{"children":[]}]},{"start":60,"value":"Please check the details. Customer may be duplicate","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end