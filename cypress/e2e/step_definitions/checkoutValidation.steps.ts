import {
  DataTable,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import CartPage from "../../pages/cartPage";
import CheckoutPage from "../../pages/checkoutPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

When("I start checkout from the cart", () => {
  inventoryPage.openCart();
  cartPage.assertCartPage();
  cartPage.checkout();
});

When("I cancel checkout information", () => {
  checkoutPage.cancelCheckoutInformation();
});

Then("the checkout form should require these fields", (table: DataTable) => {
  table.hashes().forEach(({ field, errorMessage }) => {
    checkoutPage.fillInformationExcept(field);
    checkoutPage.assertErrorMessage(errorMessage);
  });
});
