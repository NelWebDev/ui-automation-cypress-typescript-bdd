Feature: Sauce Demo login
  As a Sauce Demo user
  I want to log in and verify the inventory page

  Scenario: Successful login with valid credentials
    Given I open the Sauce Demo login page
    When I log in with standard user credentials
    Then I should see the inventory page
