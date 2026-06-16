import {
  DataTable,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import CartPage from "../../pages/cartPage";
import CheckoutPage from "../../pages/checkoutPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

type OrderSummaryProduct = {
  product: string;
  price: string;
};

type OrderTotals = {
  subtotal: string;
  tax: string;
  total: string;
};

When("I add the first product to the cart", () => {
  inventoryPage.addFirstProductToCart();
});

When("I add {int} products to the cart", (quantity: number) => {
  inventoryPage.addProductsToCart(quantity);
});

Given("these products are in the cart", (table: DataTable) => {
  table.hashes().forEach(({ product }) => {
    inventoryPage.addProductToCart(product);
  });

  inventoryPage.assertCartBadgeQuantity(table.hashes().length);
});

When("I open the cart", () => {
  inventoryPage.openCart();
});

When("I review the order before payment", () => {
  inventoryPage.openCart();
  cartPage.checkout();
  checkoutPage.fillInformation("Test", "User", "28001");
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

Then("the order summary should include these products", (table: DataTable) => {
  checkoutPage.assertOrderSummaryProducts(
    table.hashes() as OrderSummaryProduct[],
  );
});

Then("the order totals should be", (table: DataTable) => {
  const [expectedTotals] = table.hashes() as OrderTotals[];

  checkoutPage.assertOrderTotals(expectedTotals);
});
