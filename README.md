Cypress E2E Testing Project

This project contains automated end-to-end tests written in Cypress with TypeScript. The test suite covers multiple viewport scenarios (mobile, fullscreen) and generates reports via Cypress Cloud.

📁 Project Structure

cypress/: test files, support, and page objects

cypress/configs/: alternative Cypress configuration files

cypress.config.mobile.ts

cypress.config.fullscreen.ts

cypress.config.ts: default Cypress configuration

tsconfig.json: TypeScript configuration

🚀 Installation

npm install

🧲 Run Tests (Default Config)

npx cypress run

💥 Run with Fullscreen Config

npx cypress run --config-file cypress/configs/cypress.config.fullscreen.ts

📱 Run with Mobile Config

npx cypress run --config-file cypress/configs/cypress.config.mobile.ts

☁️ Reports

All test results are sent to Cypress Cloud for reporting and analysis. Make sure your project is connected and authenticated.

