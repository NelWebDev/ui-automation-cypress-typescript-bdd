class LoginPage {
  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";
  private loginLogo = ".login_logo";
  private errorMessage = '[data-test="error"]';

  visit() {
    cy.visit("/");
  }

  login(username: string, password: string) {
    cy.get(this.usernameField).clear().type(username, { delay: 0 });
    cy.get(this.passwordField).clear().type(password, { delay: 0 });
    cy.get(this.loginButton).click();
  }

  assertOnLoginPage() {
    cy.get(this.loginLogo).should("be.visible");
    cy.get(this.loginButton).should("be.visible");
  }

  assertErrorMessage(message: string) {
    cy.get(this.errorMessage).should("be.visible").and("contain.text", message);
  }
}

export default LoginPage;
