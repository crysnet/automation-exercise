import { Locator } from "@playwright/test";

export class Action {
  async clickElement(locator: Locator) {
    await locator.click();
  }
}
