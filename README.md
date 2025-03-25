# Telnyx Cypress E2E Testing Project

## Summary of Repo

This repository contains automated end-to-end tests for the Telnyx website, written in Cypress with TypeScript. The project follows the Page Object Model (POM) pattern and includes both positive and negative scenarios for various functionalities such as search and footer links. Test reports are generated via Cypress Cloud.

## Requirements

- Node.js (latest LTS recommended)
- Cypress
- TypeScript
- GitHub (for version control)

## Test Cases

🧪 [Test cases for Telnyx](https://docs.google.com/spreadsheets/d/1kseA19mz9KTTrFpkDTaiH6Goj3PPxELe0FnmTtAIUak/edit?gid=0)

## Clone the repository:
   ```sh
   git clone https://github.com/Anna-Ruban-ua/Cypress
   ```

## Steps to Launch

1. Run tests with default config:
   ```sh
   npx cypress run
   ```
2. Run tests in Chrome:
   ```sh
   npx cypress run --browser chrome
   ```
3. Run tests in Firefox:
   ```sh
   npx cypress run --browser firefox
   ```
4. Run with mobile config:
   ```sh
   npx cypress run --config-file cypress/configs/cypress.config.mobile.ts
   ```
5. Run with fullscreen config:
   ```sh
   npx cypress run --config-file cypress/configs/cypress.config.fullscreen.ts
   ```
6. Open Cypress Test Runner:
   ```sh
   npx cypress open
   ```
7. Run tests with recording enabled (Cypress Cloud):
   ```sh
   npx cypress run --record
   ```
