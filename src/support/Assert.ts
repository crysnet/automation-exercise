import { expect, Locator, Page } from "@playwright/test";
import { EXPECT_TIMEOUT } from "@/constants/timeout";

export class Assert {
  async toBeVisible(locator: Locator, timeout = EXPECT_TIMEOUT) {
    await expect(locator).toBeVisible({ timeout });
  }

  async toHaveTitle(page: Page, title: string, timeout = EXPECT_TIMEOUT) {
    await expect(page).toHaveTitle(title, { timeout });
  }

  async toContainText(
    locator: Locator,
    text: string,
    timeout = EXPECT_TIMEOUT
  ) {
    await expect(locator).toContainText(text, { timeout });
  }
}
