Feature: Sauce Demo checkout overview
  As a Sauce Demo user
  I want to review my order before payment

  Scenario: Review selected products before completing checkout
    Given I am logged in as username "standard_user"
    And these products are in the cart
      | product                |
      | Sauce Labs Backpack    |
      | Sauce Labs Bike Light  |
    When I review the order before payment
    Then the order summary should include these products
      | product                | price  |
      | Sauce Labs Backpack    | $29.99 |
      | Sauce Labs Bike Light  | $9.99  |
    And the order totals should be
      | subtotal | tax   | total  |
      | $39.98   | $3.20 | $43.18 |
