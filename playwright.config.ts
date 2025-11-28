import { defineConfig, devices } from "@playwright/test";
import { TEST_TIMEOUT } from "./src/constants/timeout";
import env from "./env";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  tsconfig: "./tsconfig.json",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  timeout: TEST_TIMEOUT,
  use: {
    baseURL: env.TEST_BASE_URL,
    headless: env.HEADLESS,
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
