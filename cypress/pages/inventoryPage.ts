class InventoryPage {
  private inventoryTitle = ".title";
  private inventoryList = ".inventory_list";
  private inventoryItem = ".inventory_item";
  private cartBadge = ".shopping_cart_badge";
  private cartLink = ".shopping_cart_link";
  private addToCartButton = '[data-test^="add-to-cart"]';
  private removeButton = '[data-test^="remove"]';
  private productName = ".inventory_item_name";
  private productPrice = ".inventory_item_price";
  private sortDropdown = ".product_sort_container";
  private menuButton = "#react-burger-menu-btn";
  private menu = ".bm-menu";
  private logoutLink = "#logout_sidebar_link";

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
    this.assertCartBadgeQuantity(1);
  }

  addProductsToCart(quantity: number) {
    cy.get(this.inventoryItem).should("have.length.at.least", quantity);

    for (let index = 0; index < quantity; index++) {
      cy.get(this.addToCartButton).first().click();
    }

    this.assertCartBadgeQuantity(quantity);
  }

  addProductToCart(productName: string) {
    cy.contains(this.inventoryItem, productName)
      .find(this.addToCartButton)
      .click();
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

  sortProductsBy(option: string) {
    cy.get(this.sortDropdown).select(option);
  }

  assertProductNamesSortedAscending() {
    cy.get(this.productName).then(($names) => {
      const productNames = [...$names].map((name) => name.innerText);
      const sortedNames = [...productNames].sort((left, right) =>
        left.localeCompare(right),
      );

      expect(productNames).to.deep.equal(sortedNames);
    });
  }

  assertProductNamesSortedDescending() {
    cy.get(this.productName).then(($names) => {
      const productNames = [...$names].map((name) => name.innerText);
      const sortedNames = [...productNames].sort((left, right) =>
        right.localeCompare(left),
      );

      expect(productNames).to.deep.equal(sortedNames);
    });
  }

  assertProductPricesSortedAscending() {
    cy.get(this.productPrice).then(($prices) => {
      const productPrices = [...$prices].map((price) =>
        Number(price.innerText.replace("$", "")),
      );
      const sortedPrices = [...productPrices].sort((left, right) => left - right);

      expect(productPrices).to.deep.equal(sortedPrices);
    });
  }

  assertProductPricesSortedDescending() {
    cy.get(this.productPrice).then(($prices) => {
      const productPrices = [...$prices].map((price) =>
        Number(price.innerText.replace("$", "")),
      );
      const sortedPrices = [...productPrices].sort((left, right) => right - left);

      expect(productPrices).to.deep.equal(sortedPrices);
    });
  }

  openMenu() {
    cy.get(this.menuButton).click();
    cy.get(this.menu).should("be.visible");
  }

  logout() {
    cy.get(this.logoutLink).click();
  }

  openProductDetails(productName: string) {
    cy.contains(this.productName, productName).should("be.visible").click();
  }

  assertCartBadgeQuantity(quantity: number | string) {
    cy.get(this.cartBadge)
      .should("be.visible")
      .and("contain.text", quantity.toString());
  }

  assertCartBadgeIsNotVisible() {
    cy.get(this.cartBadge).should("not.exist");
  }

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default InventoryPage;
