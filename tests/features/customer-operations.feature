Feature: Customer Operations

  Scenario: Make deposit to existing account
    Given I am on the login page
    When I login as customer
    And I deposit "100" to my account
    Then I see account balance successfully updated
