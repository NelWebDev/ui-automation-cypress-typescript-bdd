Feature: Sauce Demo inventory sorting
  As a Sauce Demo user
  I want to sort products by name and price

  Scenario: Products can be sorted from the inventory page
    Given I am logged in as username "standard_user"
    Then products should be sorted correctly with these options
      | option              | sortOrder        |
      | Name (A to Z)       | name ascending   |
      | Name (Z to A)       | name descending  |
      | Price (low to high) | price ascending  |
      | Price (high to low) | price descending |
