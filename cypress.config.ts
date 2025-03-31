const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://telnyx.com',
    projectId: '1mkx4j',
    
  },
});
