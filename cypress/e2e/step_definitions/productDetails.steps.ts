import {
  DataTable,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import ProductDetailsPage from "../../pages/productDetailsPage";
import CartPage from "../../pages/cartPage";

const inventoryPage = new InventoryPage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();

const getProductNames = (table: DataTable) =>
  table.hashes().map(({ productName }) => productName);

When(
  "I add these products to the cart from their details pages",
  (table: DataTable) => {
    getProductNames(table).forEach((productName, index) => {
      inventoryPage.openProductDetails(productName);
      productDetailsPage.assertProductDetails(productName);
      productDetailsPage.addProductToCart();
      productDetailsPage.assertCartBadgeQuantity(index + 1);
      productDetailsPage.backToProducts();
    });
  },
);

Then("the cart should contain these products", (table: DataTable) => {
  const productNames = getProductNames(table);

  inventoryPage.openCart();
  cartPage.assertCartPage(productNames.length);
  productNames.forEach((productName) => {
    cartPage.assertProductIsInCart(productName);
  });
});
