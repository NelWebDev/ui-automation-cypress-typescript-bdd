Feature: Sauce Demo purchase
  As a Sauce Demo user
  I want to complete product purchases

  Scenario: Complete checkout with the first product
    Given I open the Sauce Demo login page
    When I log in with username "standard_user" and password "secret_sauce"
    And I add the first product to the cart
    And I complete the checkout process
    Then I should see the order confirmation
