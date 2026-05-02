import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage";
import InventoryPage from "../../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given("I open the Sauce Demo login page", () => {
  loginPage.visit();
  loginPage.assertOnLoginPage();
});

When("I log in with standard user credentials", () => {
  loginPage.login("standard_user", "secret_sauce");
});

Then("I should see the inventory page", () => {
  inventoryPage.assertInventoryPage();
});
