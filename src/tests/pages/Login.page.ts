import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class LoginPage extends BasePage {
  readonly title: Locator
  readonly nameInput: Locator
  readonly emailInput: Locator
  readonly signupButton: Locator

  constructor(page: Page) {
    super(page)
    this.title = this.page.getByRole('heading', { name: 'New User Signup!' })
    this.nameInput = this.page.getByRole('textbox', { name: 'Name' })
    this.emailInput = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    this.signupButton = this.page.getByRole('button', { name: 'Signup' })
  }

  async assertNewUserSignupIsVisible() {
    await this.assert.toBeVisible(this.title)
  }

  async signup(name: string, email: string) {
    await this.action.setValue(this.nameInput, name)
    await this.action.setValue(this.emailInput, email)
    await this.action.click(this.signupButton)
  }
}
