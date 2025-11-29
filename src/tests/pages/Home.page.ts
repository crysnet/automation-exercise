import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class HomePage extends BasePage {
  readonly title: Locator
  readonly signupLink: Locator
  readonly loggedUserLabel: Locator
  readonly deleteAccountButton: Locator

  constructor(page: Page) {
    super(page)
    this.title = this.page.getByRole('heading', { name: 'AutomationExercise' })
    this.signupLink = this.page.getByRole('link', { name: /Signup \/ Login/i })
    this.loggedUserLabel = this.page.getByText(/Logged in as/i)
    this.deleteAccountButton = this.page.getByRole('link', {
      name: /Delete Account/i,
    })
  }

  async assertHomePageVisible() {
    await this.assert.toBeVisible(this.title)
  }

  async assertLoggedInAs(username: string) {
    await this.assert.toContainText(this.loggedUserLabel, username)
  }

  async clickOnSignupLink() {
    await this.action.click(this.signupLink)
  }

  async clickOnDeleteAccountButton() {
    await this.action.click(this.deleteAccountButton)
  }
}
