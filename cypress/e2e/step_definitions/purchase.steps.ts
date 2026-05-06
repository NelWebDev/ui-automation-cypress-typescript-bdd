import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import CartPage from "../../pages/cartPage";
import CheckoutPage from "../../pages/checkoutPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

When("I add the first product to the cart", () => {
  inventoryPage.addFirstProductToCart();
});

When("I complete the checkout process", () => {
  inventoryPage.openCart();
  cartPage.assertCartPage();
  cartPage.checkout();
  checkoutPage.fillInformation("Test", "User", "28001");
  checkoutPage.finishCheckout();
});

Then("I should see the order confirmation", () => {
  checkoutPage.assertCheckoutComplete();
});
