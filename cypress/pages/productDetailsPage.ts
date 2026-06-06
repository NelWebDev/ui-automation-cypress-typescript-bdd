class ProductDetailsPage {
  private productName = ".inventory_details_name";
  private productDescription = ".inventory_details_desc";
  private productPrice = ".inventory_details_price";
  private addToCartButton = '[data-test^="add-to-cart"]';
  private removeButton = '[data-test^="remove"]';
  private cartBadge = ".shopping_cart_badge";
  private cartLink = ".shopping_cart_link";

  assertProductDetails(productName: string) {
    cy.get(this.productName).should("be.visible").and("contain.text", productName);
    cy.get(this.productDescription).should("be.visible").and("not.be.empty");
    cy.get(this.productPrice).should("be.visible").and("contain.text", "$");
  }

  addProductToCart() {
    cy.get(this.addToCartButton)
      .should("be.visible")
      .and("contain.text", "Add to cart")
      .click();
    cy.get(this.removeButton).should("be.visible").and("contain.text", "Remove");
  }

  assertCartBadgeQuantity(quantity: number | string) {
    cy.get(this.cartBadge)
      .should("be.visible")
      .and("contain.text", quantity.toString());
  }

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default ProductDetailsPage;
