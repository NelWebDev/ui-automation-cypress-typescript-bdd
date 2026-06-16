class CheckoutPage {
  private checkoutTitle = ".title";
  private cartItem = ".cart_item";
  private cartItemName = ".inventory_item_name";
  private cartItemPrice = ".inventory_item_price";
  private firstNameField = '[data-test="firstName"]';
  private lastNameField = '[data-test="lastName"]';
  private postalCodeField = '[data-test="postalCode"]';
  private continueButton = '[data-test="continue"]';
  private cancelButton = '[data-test="cancel"]';
  private finishButton = '[data-test="finish"]';
  private completeHeader = ".complete-header";
  private backHomeButton = '[data-test="back-to-products"]';
  private errorMessage = '[data-test="error"]';
  private subtotal = ".summary_subtotal_label";
  private tax = ".summary_tax_label";
  private total = ".summary_total_label";

  fillInformation(firstName: string, lastName: string, postalCode: string) {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Your Information");
    cy.get(this.firstNameField).type(firstName, { delay: 0 });
    cy.get(this.lastNameField).type(lastName, { delay: 0 });
    cy.get(this.postalCodeField).type(postalCode, { delay: 0 });
    cy.get(this.continueButton).click();
  }

  fillInformationExcept(fieldName: string) {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Your Information");
    cy.get(this.firstNameField).clear();
    cy.get(this.lastNameField).clear();
    cy.get(this.postalCodeField).clear();

    if (fieldName !== "first name") {
      cy.get(this.firstNameField).type("Test", { delay: 0 });
    }

    if (fieldName !== "last name") {
      cy.get(this.lastNameField).type("User", { delay: 0 });
    }

    if (fieldName !== "postal code") {
      cy.get(this.postalCodeField).type("28001", { delay: 0 });
    }

    cy.get(this.continueButton).click();
  }

  assertErrorMessage(message: string) {
    cy.get(this.errorMessage).should("be.visible").and("contain.text", message);
  }

  cancelCheckoutInformation() {
    cy.get(this.cancelButton).click();
  }

  finishCheckout() {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Overview");
    cy.get(this.finishButton).click();
  }

  assertOrderSummaryProducts(products: { product: string; price: string }[]) {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Overview");
    cy.get(this.cartItem).should("have.length", products.length);

    products.forEach(({ product, price }) => {
      cy.contains(this.cartItem, product).within(() => {
        cy.get(this.cartItemName).should("contain.text", product);
        cy.get(this.cartItemPrice).should("contain.text", price);
      });
    });
  }

  assertOrderTotals(expectedTotals: {
    subtotal: string;
    tax: string;
    total: string;
  }) {
    cy.get(this.subtotal).should("contain.text", expectedTotals.subtotal);
    cy.get(this.tax).should("contain.text", expectedTotals.tax);
    cy.get(this.total).should("contain.text", expectedTotals.total);
  }

  assertCheckoutComplete() {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Complete!");
    cy.get(this.completeHeader).should("contain.text", "Thank you for your order!");
  }

  backToProducts() {
    cy.get(this.backHomeButton).click();
  }
}

export default CheckoutPage;
