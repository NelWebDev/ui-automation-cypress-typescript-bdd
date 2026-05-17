Feature: Sauce Demo purchase
  As a Sauce Demo user
  I want to complete product purchases

  Scenario: Complete checkout with the first product
    Given I am logged in as username "standard_user"
    When I add the first product to the cart
    And I complete the checkout process
    Then I should see the order confirmation

  Scenario: Complete checkout with multiple product quantities
    Given I am logged in as username "standard_user"
    When I complete purchases with these product quantities
      | quantity |
      | 2        |
      | 3        |
      | 4        |
