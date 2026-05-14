class InventoryPage {
  private inventoryTitle = ".title";
  private inventoryList = ".inventory_list";
  private inventoryItem = ".inventory_item";
  private cartBadge = ".shopping_cart_badge";
  private cartLink = ".shopping_cart_link";
  private addToCartButton = '[data-test^="add-to-cart"]';
  private removeButton = '[data-test^="remove"]';

  assertInventoryPage() {
    cy.get(this.inventoryTitle).should("contain.text", "Products");
    cy.get(this.inventoryList).should("be.visible");
    cy.get(this.inventoryItem).should("have.length.greaterThan", 0);
  }

  addFirstProductToCart() {
    cy.get(this.inventoryItem)
      .first()
      .find("button")
      .should("contain.text", "Add to cart")
      .click();
    cy.get(this.cartBadge).should("contain.text", "1");
  }

  assertFirstProductRemoveButton() {
    cy.get(this.inventoryItem)
      .first()
      .find(this.removeButton)
      .should("be.visible")
      .and("contain.text", "Remove");
  }

  assertFirstProductAddToCartButton() {
    cy.get(this.inventoryItem)
      .first()
      .find(this.addToCartButton)
      .should("be.visible")
      .and("contain.text", "Add to cart");
  }

  removeFirstProductFromInventory() {
    cy.get(this.inventoryItem).first().find(this.removeButton).click();
  }

  assertCartBadgeQuantity(quantity: string) {
    cy.get(this.cartBadge).should("be.visible").and("contain.text", quantity);
  }

  assertCartBadgeIsNotVisible() {
    cy.get(this.cartBadge).should("not.exist");
  }

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default InventoryPage;
