# QA Automation using Playwright

This project is an automated end-to-end testing suite for web application, built using Playwright, Playwright-BDD (Gherkin syntax) and the Page Object Model (POM) design pattern.

## Project Structure

- **.github/workflows/ci.yml**: GitHub Actions workflow for CI/CD automation
- **src/page-objects/**: Page Object Model classes for each application page (e.g., `home-page.ts`, `invoices-page.ts`)
- **src/features/**: Gherkin `.feature` files and their step definitions in TypeScript
- **playwright.config.ts**: Playwright and Playwright-BDD configuration
- **package.json**: Project dependencies and scripts
- **Other supporting files and folders**

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyanka-r-arora/qa-automation-playwright.git
   cd qa-automation-playwright
   ```

## Prerequisites

- **Node.js** ([Download & Install](https://nodejs.org/))

Node.js is required for running Playwright tests. If you already have it installed, you can proceed with the installation and test steps.

- **Web application**
   - Web application is already deployed in Azure
   - The base URL is `https://web-frontend-qa-bphse9crexbna2he.westeurope-01.azurewebsites.net`

## How to Run the Tests Locally

1. **Install dependencies**

   ```sh
   npm install
   npx playwright install --with-deps
   ```

2. **Run tests**

   ```sh
   npm run test
   ```

   or for CI/headless:

   ```sh
   npm run test:ci
   ```

3. **Generate reports**
   - **Allure report:**
     ```sh
     npm run generate-and-open-reports
     ```

## How to Run Tests Using the CI Pipeline (GitHub Actions)

1. **Push your changes to GitHub**
   - Commit and push your code to any branch

2. **Trigger the CI workflow**
   - The GitHub Actions workflow (`.github/workflows/ci.yml`) will automatically run for every push or pull request

3. **View workflow status**
   - Go to the "Actions" tab in your GitHub repository to see the status of the workflow runs
   - Click on a workflow run to view detailed logs, test results and artifacts

4. **Download test reports**
   - After the workflow completes you can download generated test and report artifacts (such as Allure reports) from the workflow summary page

**Note:** The CI pipeline will automatically install dependencies, run Playwright BDD tests and generate/upload reports. No manual steps are required for CI runs.

## Page Object Model (POM)

This project uses the Page Object Model design pattern. Each page of the application has a corresponding class in `src/page-objects/`. These classes encapsulate selectors and methods for interacting with the page.

### Benefits of POM

- **Maintainability:** Changes in the UI require updates only in the page object, not in every test
- **Reusability:** Common actions and selectors are centralized and reusable across multiple tests
- **Readability:** Test steps are more readable and focused on business logic
- **Scalability:** Makes it easier to scale your test suite as the application grows

## Code Reusability

This project leverage the POM and utility/helper functions for code reusability.

- **Page Object Model (POM):**
  - Each page class (in `src/page-objects/`) encapsulates selectors and actions for a specific page. These classes can be reused across multiple tests and scenarios, reducing duplication and improving maintainability
  - Common navigation and menu actions are centralized in page objects, making it easy to update selectors or logic in one place

- **Step Definitions:**
  - Step definitions in `src/features/**/steps.ts` are parameterized (like menu item names, invoice numbers), allowing the same step to be reused in different scenarios and features

- **Config:**
  - URLs, menu item names are centralized in config files (`src/config.ts`). This ensure consistency and easy updates across the test suite

## Scripts

- `npm test` - Run tests in headed mode
- `npm run test:ci` - Run tests in headless mode
- `npm run generate-and-open-reports` - Generate and open Allure report
- `npm run format` - Format code and feature files with Prettier.
- `npm run format:check` - Check formatting

## Continuous Integration (CI)

This project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) for automated testing in CI environments.

## Supported Browsers and Devices

This test suite is configured to run on multiple browsers and devices using Playwright's projects feature.

- **Desktop Browsers:**
  - Google Chrome (Desktop Chrome)
  - Mozilla Firefox (Desktop Firefox)
- **Mobile Devices (Emulated):**
  - Google Pixel 8 (Mobile Chrome)
  - Apple iPhone 16 (Mobile Safari)

This ensures your application is tested across both desktop and mobile environments. You can adjust or extend the list of browsers/devices in `playwright.config.ts` under the `projects` section.

## Author

Priyanka Arora
