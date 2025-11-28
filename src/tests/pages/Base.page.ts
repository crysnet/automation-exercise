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

  async navigate(slug?: string) {
    await this.page.goto(slug || "/");
  }
}
