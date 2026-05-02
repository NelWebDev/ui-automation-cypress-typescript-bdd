class InventoryPage {
  private inventoryTitle = ".title";
  private inventoryList = ".inventory_list";
  private inventoryItem = ".inventory_item";

  assertInventoryPage() {
    cy.get(this.inventoryTitle).should("contain.text", "Products");
    cy.get(this.inventoryList).should("be.visible");
    cy.get(this.inventoryItem).should("have.length.greaterThan", 0);
  }
}

export default InventoryPage;
