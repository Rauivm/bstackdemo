const { defineConfig } = require("cypress");
const fs = require("fs");
const yaml = require("js-yaml");
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

      // =========================
      // Custom Tasks
      // =========================
      on("task", {
        readYaml(filePath) {
          const file = fs.readFileSync(filePath, "utf8");
          return yaml.load(file);
        },
      });

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