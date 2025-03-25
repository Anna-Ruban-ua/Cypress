# Telnyx Cypress E2E Testing Project

## Reports

🔗 [Latest Cypress report](https://cloud.cypress.io/projects/1mkx4j/runs/10/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D&testingTypesEnum=%5B%5D)

## Test Cases

🧪 [Test cases for Telnyx](https://docs.google.com/spreadsheets/d/1kseA19mz9KTTrFpkDTaiH6Goj3PPxELe0FnmTtAIUak/edit?gid=0)

## Requirements

- Node.js (latest LTS recommended)
- Cypress
- TypeScript
- GitHub (for version control)

## Clone the repository:
   ```sh
   git clone https://github.com/Anna-Ruban-ua/Cypress
   ```

## Steps to Launch

1. Run tests with default config:
   ```sh
   npx cypress run
   ```
2. Run with mobile config:
   ```sh
   npx cypress run --config-file cypress/configs/cypress.config.mobile.ts
   ```
3. Run with fullscreen config:
   ```sh
   npx cypress run --config-file cypress/configs/cypress.config.fullscreen.ts
   ```
4. Open Cypress Test Runner:
   ```sh
   npx cypress open
   ```
