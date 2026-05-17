# UI Automation Cypress TypeScript BDD

End-to-end UI automation framework for the Sauce Demo application, built with Cypress, TypeScript, Cucumber/Gherkin, and the Page Object Model.

## Tech Stack

- Cypress for browser-based end-to-end testing
- TypeScript for typed and maintainable test code
- Cucumber/Gherkin for business-readable scenarios
- Page Object Model for reusable page interactions and assertions
- esbuild preprocessor for TypeScript and feature file execution

## Project Structure

```text
cypress/
  e2e/
    features/           Gherkin feature files
    step_definitions/   Cucumber step definitions
  pages/                Page Object classes
  support/              Cypress support files and custom commands
BUGS.md                 Known bug registry linked to tagged scenarios
cypress.config.js       Cypress and Cucumber preprocessor configuration
tsconfig.json           TypeScript configuration
```

## Prerequisites

- Node.js 18 or later
- npm
- Google Chrome

## Installation

```bash
npm install
```

## Running Tests

Run the suite in headless Chrome:

```bash
npm run test
```

Run known bug scenarios only:

```bash
npm run test:bugs
```

Run the suite in headed Chrome:

```bash
npm run test:headed
```

Run the suite and generate a JUnit report:

```bash
npm run test:report
```

Run all local validation checks:

```bash
npm run validate
```

## Validation Before Commit

```bash
npm run typecheck
npm run test
```

If Cypress fails to start on Windows with `bad option: --smoke-test`, make sure `ELECTRON_RUN_AS_NODE` is not set for the Cypress process:

```powershell
$env:ELECTRON_RUN_AS_NODE=$null; npm run test
```

## Test Coverage

Current coverage includes:

- Successful login with valid Sauce Demo credentials
- Validation of the inventory page after login
- Invalid login attempts and locked-out user validation
- Checkout flow for the first product
- Checkout flow for 2, 3, and 4 products in a single optimized session
- Cart badge updates when a product is added and removed from the inventory page
- Known cart checkout bug coverage tagged with `@bug`

Recommended next scenarios:

- Required field validation
- Logout flow
- Checkout form validation

## Configuration

- Base URL: `https://www.saucedemo.com`
- Spec pattern: `cypress/e2e/features/**/*.feature`
- Step definitions: `cypress/e2e/step_definitions/**/*.ts`
- Default test scripts exclude scenarios tagged with `@slow`, `@extended`, and `@bug`
- Videos are disabled by default
- Purchase and cart scenarios use a logged-in setup step so login UI coverage stays isolated in `login.feature`
- Page load timeout is extended to reduce flakiness from repeated Sauce Demo page loads

## Known Bugs

Known application bugs are documented in `BUGS.md` and linked to scenarios tagged with `@bug`.
These scenarios are excluded from the default suite so they do not block regular validation, but they can be run with `npm run test:bugs`.

## Notes

This project is intended as a clean starting point for UI automation using Cypress with BDD-style test definitions.
