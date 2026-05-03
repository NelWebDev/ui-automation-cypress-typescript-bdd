Feature: Sauce Demo login
  As a Sauce Demo user
  I want to log in and verify the inventory page

  Scenario: Successful login with standard user
    Given I open the Sauce Demo login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the inventory page

  @extended
  Scenario Outline: Successful login with additional accepted users
    Given I open the Sauce Demo login page
    When I log in with username "<username>" and password "secret_sauce"
    Then I should see the inventory page

    Examples:
      | username                |
      | problem_user            |
      | error_user              |
      | visual_user             |

  Scenario: Failed login with invalid credentials
    Given I open the Sauce Demo login page
    When I validate these invalid login attempts
      | username        | password     | errorMessage                                                              |
      | invalid_user    | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | wrong_pass   | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
    Then I should remain on the login page

  @slow
  Scenario: Successful login with performance glitch user
    Given I open the Sauce Demo login page
    When I log in with username "performance_glitch_user" and password "secret_sauce"
    Then I should see the inventory page
