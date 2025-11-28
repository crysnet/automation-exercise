import { Locator, Page } from "@playwright/test";

export class SignupPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.locator("h1");
  }

  async navigate() {
    await this.page.goto("/signup");
  }
}
