import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/inventoryPage";
import ProductDetailsPage from "../../pages/productDetailsPage";
import CartPage from "../../pages/cartPage";

const inventoryPage = new InventoryPage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();

Given("I am viewing the product details for {string}", (productName: string) => {
  inventoryPage.openProductDetails(productName);
  productDetailsPage.assertProductDetails(productName);
});

When("I add the product to the cart from the product details page", () => {
  productDetailsPage.addProductToCart();
  productDetailsPage.assertCartBadgeQuantity(1);
});

Then("the cart should contain product {string}", (productName: string) => {
  productDetailsPage.openCart();
  cartPage.assertCartPage();
  cartPage.assertProductIsInCart(productName);
});
