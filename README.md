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

## Install

1. Clone the repository:
   ```sh
   git clone https://github.com/Anna-Ruban-ua/Cypress
   ```
2. Navigate to the project directory:
   ```sh
   cd Cypress
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Steps to Launch

1. Run tests with default config:
   ```sh
   npm run test
   ```
2. Run tests in Chrome:
   ```sh
   npm run test:chrome
   ```
3. Run tests in Firefox:
   ```sh
   npm run test:firefox
   ```
4. Run with mobile config:
   ```sh
   npm run test:mobile
   ```
5. Run with fullscreen config:
   ```sh
   npm run test:fullscreen
   ```
6. Open Cypress Test Runner:
   ```sh
   npm run open
   ```

## CI and Cypress Cloud

- The project can be integrated with CI pipelines using GitHub Actions.
- Cypress Cloud is used to record test runs and view dashboards with test analytics.

To run tests with recording enabled (Cypress Cloud):
```sh
npm run test:record
```