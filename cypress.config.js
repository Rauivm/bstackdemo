const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {

      // =========================
      // Allure Plugin
      // =========================
      allureWriter(on, config);

      return config;
    },
    baseUrl: "https://bstackdemo.com",
  },

  // =========================
  // Allure Configuration
  // =========================
  env: {
    allure: true,
    allureResultsPath: "allure-results",
  },
});