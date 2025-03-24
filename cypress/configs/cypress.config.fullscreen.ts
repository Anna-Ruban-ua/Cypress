import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://telnyx.com',
    projectId: '1mkx4j',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});