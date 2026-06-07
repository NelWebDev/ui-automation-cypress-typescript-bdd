Feature: Sauce Demo navigation
  As a Sauce Demo user
  I want session and menu navigation to protect user state

  Scenario: Logout returns the user to the login page
    Given I am logged in as username "standard_user"
    When I log out from the inventory menu
    Then I should remain on the login page
