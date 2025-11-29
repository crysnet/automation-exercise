import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class DeleteAccountPage extends BasePage {
  readonly title: Locator

  constructor(page: Page) {
    super(page)
    this.title = this.page.getByText('Account Deleted!')
  }

  async assertDeletedTitleIsVisible() {
    await this.assert.toBeVisible(this.title)
  }
}
