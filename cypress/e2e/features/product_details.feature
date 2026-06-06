Feature: Sauce Demo product details
  As a Sauce Demo user
  I want to review each product details page
  So that I can add the selected product to the cart

  Scenario: Add products to cart from their details pages
    Given I am logged in as username "standard_user"
    When I add these products to the cart from their details pages
      | productName                       |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |
    Then the cart should contain these products
      | productName                       |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |
