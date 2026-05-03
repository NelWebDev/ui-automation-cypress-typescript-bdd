import {
  DataTable,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage";
import InventoryPage from "../../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given("I open the Sauce Demo login page", () => {
  loginPage.visit();
  loginPage.assertOnLoginPage();
});

When(
  "I log in with username {string} and password {string}",
  (username: string, password: string) => {
    loginPage.login(username, password);
  },
);

Then("I should see the inventory page", () => {
  inventoryPage.assertInventoryPage();
});

Then("I should see the login error {string}", (errorMessage: string) => {
  loginPage.assertErrorMessage(errorMessage);
});

Then("I should remain on the login page", () => {
  loginPage.assertOnLoginPage();
});

When("I validate these invalid login attempts", (loginAttempts: DataTable) => {
  loginAttempts.hashes().forEach(({ username, password, errorMessage }) => {
    loginPage.login(username, password);
    loginPage.assertErrorMessage(errorMessage);
  });
});
