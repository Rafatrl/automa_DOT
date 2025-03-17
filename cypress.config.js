const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { allureCypress } = require('allure-cypress/reporter');



module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/integration/**/*.spec.js",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      allureCypress(on, config);
      return config;
    },

    experimentalStudio: true,   // habilita o recurso Experimental Studio para gravar as interações feitas manualmente.
    defaultCommandTimeout: 8000,
    screenshotOnRunFailure: true,
    video: false
  }
});

