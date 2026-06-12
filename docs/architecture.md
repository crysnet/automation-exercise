# Project Architecture

## Overview
This is a test automation project based on Playwright, TypeScript, and the Page Object Model (POM) pattern. It's designed to test the Automation Exercise web application.

## Implemented Technologies

### Core
- **Playwright Test**: Test automation framework
- **TypeScript**: Statically typed programming language
- **Zod**: Schema validation for data and environment variables
- **Dotenv**: Environment variable management

### Reporting
- **Allure Playwright**: Visual report generation
- **Playwright HTML Reporter**: Built-in HTML reporting

### Code Quality
- **ESLint**: TypeScript code linting
- **Prettier**: Code formatter
- **Husky**: Pre-commit git hooks
- **Lint-staged**: Run linters on staged files

## Project Structure

```
automation-exercise/
├── src/
│   ├── constants/
│   │   └── timeout.ts          # Timeout constants
│   ├── support/
│   │   ├── Action.ts           # Wrapper class for common actions
│   │   └── Assert.ts           # Wrapper class for assertions
│   └── tests/
│       ├── fixtures/
│       │   ├── data/
│       │   │   ├── schemas/
│       │   │   │   └── account.schema.ts  # Zod schema for account data
│       │   │   └── account.data.json      # Test data
│       │   └── page.fixture.ts            # Playwright page fixtures
│       ├── pages/
│       │   ├── Base.page.ts               # Base class for all pages
│       │   ├── Home.page.ts               # Home page
│       │   ├── Login.page.ts              # Login/signup page
│       │   ├── Signup.page.ts             # Signup page
│       │   ├── AccountCreated.page.ts     # Account created page
│       │   └── DeleteAccount.page.ts      # Delete account page
│       └── specs/
│           └── signup.spec.ts             # Test specifications
├── docs/
│   ├── test-cases.md                      # Test cases in Gherkin
│   └── architecture.md                    # This documentation
├── .env.example                           # Environment variables example
├── env.ts                                 # Environment variables validation
├── playwright.config.ts                   # Playwright configuration
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Dependencies and scripts
└── eslint.config.mts                      # ESLint configuration
```

## Design Patterns

### 1. Page Object Model (POM)
Each application page has its own class that encapsulates:
- Element locators
- Interaction methods
- Assertion methods

### 2. Wrapper Classes (Action & Assert)
- **Action**: Wraps common actions (click, setValue, selectOption, etc.) with scroll handling and timeouts
- **Assert**: Wraps common assertions (toBeVisible, toHaveTitle, toContainText, etc.)

### 3. Fixtures
- Use of Playwright fixtures to inject page instances into tests
- Improves code reusability and maintainability

## Implemented Features

### Automated Test
- **Test Case 1: Register User**: Complete user registration and account deletion flow

### Supported Browsers
- Chromium (Google Chrome)
- Firefox

### Available Scripts
```bash
npm run test                # Run all tests
npm run test:report         # View Playwright report
npm run allure:serve        # Generate and view Allure report
npm run install:browsers    # Install Playwright browsers
npm run format              # Format code with Prettier
npm run lint                # Run ESLint
```

## Timeout Configuration
- `TEST_TIMEOUT`: 90000 ms (1.5 minutes)
- `ACTION_TIMEOUT`: 15000 ms (15 seconds)
- `EXPECT_TIMEOUT`: 8000 ms (8 seconds)

## Import Aliases
Configured in `tsconfig.json` for better readability:
- `@/support/*`: src/support
- `@/pages/*`: src/tests/pages
- `@/fixtures/*`: src/tests/fixtures
- `@/constants/*`: src/constants
