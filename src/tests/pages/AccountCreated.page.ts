import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class AccountCreatedPage extends BasePage {
  readonly title: Locator
  readonly continueButton: Locator

  constructor(page: Page) {
    super(page)
    this.title = page.getByText('Account Created!')
    this.continueButton = page.getByRole('link', { name: 'Continue' })
  }

  async assertTitleIsVisible() {
    await this.assert.toBeVisible(this.title)
  }

  async clickOnContinueButton() {
    await this.action.click(this.continueButton)
  }
}
