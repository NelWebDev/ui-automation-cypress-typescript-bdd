class CartPage {
  private cartTitle = ".title";
  private cartItem = ".cart_item";
  private checkoutButton = '[data-test="checkout"]';

  assertCartPage() {
    cy.get(this.cartTitle).should("contain.text", "Your Cart");
    cy.get(this.cartItem).should("have.length", 1);
  }

  checkout() {
    cy.get(this.checkoutButton).click();
  }
}

export default CartPage;
