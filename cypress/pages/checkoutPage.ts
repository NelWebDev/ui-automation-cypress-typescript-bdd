class CheckoutPage {
  private checkoutTitle = ".title";
  private firstNameField = '[data-test="firstName"]';
  private lastNameField = '[data-test="lastName"]';
  private postalCodeField = '[data-test="postalCode"]';
  private continueButton = '[data-test="continue"]';
  private finishButton = '[data-test="finish"]';
  private completeHeader = ".complete-header";

  fillInformation(firstName: string, lastName: string, postalCode: string) {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Your Information");
    cy.get(this.firstNameField).type(firstName, { delay: 0 });
    cy.get(this.lastNameField).type(lastName, { delay: 0 });
    cy.get(this.postalCodeField).type(postalCode, { delay: 0 });
    cy.get(this.continueButton).click();
  }

  finishCheckout() {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Overview");
    cy.get(this.finishButton).click();
  }

  assertCheckoutComplete() {
    cy.get(this.checkoutTitle).should("contain.text", "Checkout: Complete!");
    cy.get(this.completeHeader).should("contain.text", "Thank you for your order!");
  }
}

export default CheckoutPage;
