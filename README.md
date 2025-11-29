# Automation Challenge

A Playwright-based automated testing project for the signup feature.

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Playwright Browsers

```bash
npm run install:browsers
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
TEST_BASE_URL=https://automationexercise.com
HEADLESS=false
WORKERS=1
RETRIES=1
```

**Environment Variables:**

- `TEST_BASE_URL` (required): Base URL of the application to test
- `HEADLESS` (optional): Run tests in headless mode (`true` or `false`, default: `true`)
- `WORKERS` (optional): Number of parallel workers (default: `1`)
- `RETRIES` (optional): Number of retries on failure (default: `1`)

## Running Tests

### Run all tests

```bash
npm test
```

Tests will run on **Chromium** and **Firefox** browsers by default.

### View HTML Report

After running tests, view the HTML report:

```bash
npm run test:report
```

### View Allure Report

**Prerequisite**: JDK 22 or higher is required to run Allure reports.

Generate and serve the Allure report:

```bash
npm run allure:serve
```

## Project Structure

```
├── .env                        # Environment variables (create this file)
├── env.ts                      # Environment configuration validation
├── playwright.config.ts        # Playwright test configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mts          # ESLint configuration
├── package.json               # Project dependencies and scripts
├── allure-results/            # Allure test results (generated)
├── playwright-report/         # HTML test reports (generated)
├── test-results/              # Test execution results (generated)
└── src/
    ├── constants/             # Timeout constants
    ├── support/               # Helper classes (Action, Assert)
    └── tests/
        ├── fixtures/          # Test data files (JSON and data validation schemas)
        ├── pages/             # Page Object Models
        └── specs/             # Test specifications
```

## Test Coverage

- **Test Case 1: Register User** - Complete user registration flow from signup to account deletion

## Additional Commands

- **Format code**: `npm run format`
- **Lint code**: `npm run lint`
