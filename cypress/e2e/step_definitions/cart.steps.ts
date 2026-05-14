import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import CartPage from "../../pages/cartPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

When("I add the first inventory product to the cart", () => {
  inventoryPage.addFirstProductToCart();
});

Given("the first inventory product is in the cart", () => {
  inventoryPage.addFirstProductToCart();
  inventoryPage.assertCartBadgeQuantity("1");
  inventoryPage.assertFirstProductRemoveButton();
});

When("I remove the product from the cart", () => {
  inventoryPage.openCart();
  cartPage.assertCartPage();
  cartPage.removeProduct();
});

When("I remove the first inventory product", () => {
  inventoryPage.removeFirstProductFromInventory();
});

Then("the cart badge should show {string}", (quantity: string) => {
  inventoryPage.assertCartBadgeQuantity(quantity);
});

Then("the first inventory product should show the remove button", () => {
  inventoryPage.assertFirstProductRemoveButton();
});

Then("the first inventory product should show the add to cart button", () => {
  inventoryPage.assertFirstProductAddToCartButton();
});

Then("the cart badge should not be visible", () => {
  inventoryPage.assertCartBadgeIsNotVisible();
});

Then("the cart should be empty", () => {
  cartPage.assertCartIsEmpty();
});

Then("the checkout button should be disabled", () => {
  cartPage.assertCheckoutButtonIsDisabled();
});
