Feature: Bank Manager Operations - Open Account


  Scenario: Open an account for existing customer
    Given I am on the login page
    When I login as Bank Manager
    Then I open new account with currency "Pound" for existing customer and see message "Account created successfully with account Number"
    And Customer record is updated with new account number


