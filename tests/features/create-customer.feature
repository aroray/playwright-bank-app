Feature: Bank Manager Operations - Create a Customer


  Scenario Outline: Successful creation of a new customer and added to customer table
    Given I am on the login page
    # Visual Testing example Step
    And I validate login page
    When I login as Bank Manager
    Then I add customer with '<firstName>' '<lastName>' '<postcode>' and see '<message>'
    And I see new customer with '<firstName>' '<lastName>' '<postcode>' is added to the customer table

    Examples:
      | firstName | lastName | postcode | message                                      |
      | John      | Brown    | 12345    | Customer added successfully with customer id |


  Scenario Outline: Attempt to create a duplicate customer
    Given I am on the login page
    When I login as Bank Manager
    Then I add customer with '<firstName>' '<lastName>' '<postcode>'
    And I add duplicate customer with '<firstName>' '<lastName>' '<postcode>' and see '<duplicateMessage>' in add customer page

    Examples:
      | firstName | lastName | postcode | duplicateMessage                                    |
      | John      | Doe      | 12345    | Please check the details. Customer may be duplicate |

