class InventoryPage {
  private inventoryTitle = ".title";
  private inventoryList = ".inventory_list";
  private inventoryItem = ".inventory_item";
  private cartBadge = ".shopping_cart_badge";
  private cartLink = ".shopping_cart_link";

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

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default InventoryPage;
