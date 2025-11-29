import { defineConfig, devices } from '@playwright/test'
import { EXPECT_TIMEOUT, TEST_TIMEOUT } from './src/constants/timeout'
import env from './env'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './src/tests/specs',
  tsconfig: './tsconfig.json',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : env.RETRIES,
  workers: process.env.CI ? 1 : env.WORKERS,
  reporter: [
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results',
        detail: true,
        suiteTitle: false,
      },
    ],
    ['html'],
  ],
  timeout: TEST_TIMEOUT,
  expect: {
    timeout: EXPECT_TIMEOUT,
  },
  use: {
    baseURL: env.TEST_BASE_URL,
    headless: env.HEADLESS,
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
})
