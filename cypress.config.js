const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://telnyx.com',
    projectId: 'ofn6my',
    
  },
});
