Feature: Sauce Demo cart
  As a Sauce Demo user
  I want the cart state to match the products I add and remove

  @bug
  Scenario: Checkout is disabled after removing the product from the cart
    Given I open the Sauce Demo login page
    When I log in with username "standard_user" and password "secret_sauce"
    And I add the first product to the cart
    And I remove the product from the cart
    Then the cart should be empty
    And the checkout button should be disabled

  Scenario: Remove product from inventory updates the cart badge
    Given I open the Sauce Demo login page
    And I log in with username "standard_user" and password "secret_sauce"
    And the first inventory product is in the cart
    When I remove the first inventory product
    Then the cart badge should not be visible
    And the first inventory product should show the add to cart button
