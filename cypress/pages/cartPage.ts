class CartPage {
  private cartTitle = ".title";
  private cartItem = ".cart_item";
  private checkoutButton = '[data-test="checkout"]';
  private removeButton = '[data-test^="remove"]';

  assertCartPage() {
    cy.get(this.cartTitle).should("contain.text", "Your Cart");
    cy.get(this.cartItem).should("have.length", 1);
  }

  removeProduct() {
    cy.get(this.cartItem).first().find(this.removeButton).click();
  }

  assertCartIsEmpty() {
    cy.get(this.cartItem).should("not.exist");
  }

  assertCheckoutButtonIsDisabled() {
    cy.get(this.checkoutButton).should("be.disabled");
  }

  checkout() {
    cy.get(this.checkoutButton).click();
  }
}

export default CartPage;
