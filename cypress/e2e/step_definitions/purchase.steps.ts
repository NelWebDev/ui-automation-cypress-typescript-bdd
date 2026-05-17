import { DataTable, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import CartPage from "../../pages/cartPage";
import CheckoutPage from "../../pages/checkoutPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

When("I add the first product to the cart", () => {
  inventoryPage.addFirstProductToCart();
});

When("I add {int} products to the cart", (quantity: number) => {
  inventoryPage.addProductsToCart(quantity);
});

When("I open the cart", () => {
  inventoryPage.openCart();
});

When("I complete the checkout process", () => {
  inventoryPage.openCart();
  cartPage.assertCartPage();
  cartPage.checkout();
  checkoutPage.fillInformation("Test", "User", "28001");
  checkoutPage.finishCheckout();
});

When("I complete the checkout from the cart page", () => {
  cartPage.checkout();
  checkoutPage.fillInformation("Test", "User", "28001");
  checkoutPage.finishCheckout();
});

When("I complete purchases with these product quantities", (table: DataTable) => {
  table.hashes().forEach(({ quantity: quantityValue }) => {
    const quantity = Number(quantityValue);

    inventoryPage.addProductsToCart(quantity);
    inventoryPage.assertCartBadgeQuantity(quantity);
    inventoryPage.openCart();
    cartPage.assertCartPage(quantity);
    cartPage.checkout();
    checkoutPage.fillInformation("Test", "User", "28001");
    checkoutPage.finishCheckout();
    checkoutPage.assertCheckoutComplete();
    checkoutPage.backToProducts();
  });
});

Then("I should see {int} products in the cart badge", (quantity: number) => {
  inventoryPage.assertCartBadgeQuantity(quantity);
});

Then("I should see {int} products in the cart page", (quantity: number) => {
  cartPage.assertCartPage(quantity);
});

Then("I should see the order confirmation", () => {
  checkoutPage.assertCheckoutComplete();
});
