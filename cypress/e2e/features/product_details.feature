Feature: Sauce Demo product details
  As a Sauce Demo user
  I want to review each product details page
  So that I can add the selected product to the cart

  Scenario Outline: Add product to cart from its details page
    Given I am logged in as username "standard_user"
    And I am viewing the product details for "<productName>"
    When I add the product to the cart from the product details page
    Then the cart should contain product "<productName>"

    Examples:
      | productName                       |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |
