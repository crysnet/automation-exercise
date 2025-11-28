import { Locator, Page } from "@playwright/test";
import { BasePage } from "./Base.page";

export class HomePage extends BasePage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.page.getByRole("heading", { name: "AutomationExercise" });
  }

  async assertToHaveTitle(title: string) {
    await this.assert.toHaveTitle(this.page, title);
  }
}
