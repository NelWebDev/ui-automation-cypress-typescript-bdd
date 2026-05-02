class LoginPage {
  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";
  private loginLogo = ".login_logo";

  visit() {
    cy.visit("/");
  }

  login(username: string, password: string) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }

  assertOnLoginPage() {
    cy.get(this.loginLogo).should("be.visible");
    cy.get(this.loginButton).should("be.visible");
  }
}

export default LoginPage;
