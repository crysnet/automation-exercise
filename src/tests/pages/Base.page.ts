import { Action } from "@/support/Action";
import { Assert } from "@/support/Assert";
import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly assert: Assert;
  readonly action: Action;

  constructor(page: Page) {
    this.page = page;
    this.assert = new Assert();
    this.action = new Action();
  }

  async navigate(url?: string) {
    await this.page.goto(url ?? "/");
  }

  async assertPageToHaveTitle(title: string) {
    await this.assert.toHaveTitle(this.page, title);
  }
}
