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

Recommended next scenarios:

- Login with invalid credentials
- Login with a locked-out user
- Required field validation
- Logout flow

## Configuration

- Base URL: `https://www.saucedemo.com`
- Spec pattern: `cypress/e2e/features/**/*.feature`
- Step definitions: `cypress/e2e/step_definitions/**/*.ts`
- Videos are disabled by default

## Notes

This project is intended as a clean starting point for UI automation using Cypress with BDD-style test definitions.
