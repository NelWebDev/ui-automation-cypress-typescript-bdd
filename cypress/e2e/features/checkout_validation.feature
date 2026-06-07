Feature: Sauce Demo checkout validation
  As a Sauce Demo user
  I want checkout information validation to prevent incomplete orders

  Scenario: Required checkout information is validated
    Given I am logged in as username "standard_user"
    And the first inventory product is in the cart
    When I start checkout from the cart
    Then the checkout form should require these fields
      | field       | errorMessage                      |
      | first name  | Error: First Name is required     |
      | last name   | Error: Last Name is required      |
      | postal code | Error: Postal Code is required    |

  Scenario: Cancel checkout information returns to the cart
    Given I am logged in as username "standard_user"
    And the first inventory product is in the cart
    When I start checkout from the cart
    And I cancel checkout information
    Then I should see 1 products in the cart page
