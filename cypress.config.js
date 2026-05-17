const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    baseUrl: "https://www.saucedemo.com",
    pageLoadTimeout: 120000,
    blockHosts: ["events.backtrace.io"],
    video: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      stepDefinitions: "cypress/e2e/step_definitions/**/*.ts",
    },
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium") {
          launchOptions.preferences.default =
            launchOptions.preferences.default || {};
          launchOptions.preferences.default[
            "profile.default_content_setting_values.images"
          ] = 2;
        }

        return launchOptions;
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },
});
