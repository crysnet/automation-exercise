import { Locator, Page } from '@playwright/test'
import { BasePage } from './Base.page'

export class SignupPage extends BasePage {
  readonly title: Locator
  readonly nameInput: Locator
  readonly passwordInput: Locator
  readonly daySelect: Locator
  readonly monthSelect: Locator
  readonly yearSelect: Locator
  readonly newsletterCheckbox: Locator
  readonly offersCheckbox: Locator
  // Address information
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly companyInput: Locator
  readonly addressInput: Locator
  readonly address2Input: Locator
  readonly countrySelect: Locator
  readonly stateInput: Locator
  readonly cityInput: Locator
  readonly zipcodeInput: Locator
  readonly mobileNumberInput: Locator
  readonly createAccountButton: Locator

  constructor(page: Page) {
    super(page)
    this.title = this.page.getByText('Enter Account Information')
    this.nameInput = this.page.getByRole('textbox', {
      name: 'Name *',
      exact: true,
    })
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password *' })
    this.daySelect = this.page.locator('#days')
    this.monthSelect = this.page.locator('#months')
    this.yearSelect = this.page.locator('#years')
    this.newsletterCheckbox = this.page.getByRole('checkbox', {
      name: 'Sign up for our newsletter!',
    })
    this.offersCheckbox = this.page.getByRole('checkbox', {
      name: 'Receive special offers from',
    })
    // Address information
    this.firstNameInput = this.page.locator("[data-qa='first_name']")
    this.lastNameInput = this.page.locator("[data-qa='last_name']")
    this.companyInput = this.page.locator("[data-qa='company']")
    this.addressInput = this.page.locator("[data-qa='address']")
    this.address2Input = this.page.locator("[data-qa='address2']")
    this.countrySelect = this.page.locator("[data-qa='country']")
    this.stateInput = this.page.locator("[data-qa='state']")
    this.cityInput = this.page.locator("[data-qa='city']")
    this.zipcodeInput = this.page.locator("[data-qa='zipcode']")
    this.mobileNumberInput = this.page.locator("[data-qa='mobile_number']")
    this.createAccountButton = this.page.getByRole('button', {
      name: 'Create Account',
    })
  }

  async completeAccountInformationForm(info: {
    title: string
    name: string
    password: string
    dateOfBirth: { day: string; month: string; year: string }
  }) {
    await this.action.setChecked(this.page.getByRole('radio', { name: info.title }))
    await this.action.setValue(this.nameInput, info.name)
    await this.action.setValue(this.passwordInput, info.password)
    await this.action.selectOption(this.daySelect, info.dateOfBirth.day)
    await this.action.selectOption(this.monthSelect, info.dateOfBirth.month)
    await this.action.selectOption(this.yearSelect, info.dateOfBirth.year)
    await this.action.setChecked(this.newsletterCheckbox)
    await this.action.setChecked(this.offersCheckbox)
  }

  async completeAddressInformationForm(details: {
    firstName: string
    lastName: string
    company: string
    address: string
    address2?: string
    country: string
    state: string
    city: string
    zipcode: string
    mobileNumber: string
  }) {
    await this.action.setValue(this.firstNameInput, details.firstName)
    await this.action.setValue(this.lastNameInput, details.lastName)
    await this.action.setValue(this.companyInput, details.company)
    await this.action.setValue(this.addressInput, details.address)
    if (details.address2) {
      await this.action.setValue(this.address2Input, details.address2)
    }
    await this.action.selectOption(this.countrySelect, details.country)
    await this.action.setValue(this.stateInput, details.state)
    await this.action.setValue(this.cityInput, details.city)
    await this.action.setValue(this.zipcodeInput, details.zipcode)
    await this.action.setValue(this.mobileNumberInput, details.mobileNumber)
  }

  async clickOnCreateAccountButton() {
    await this.action.click(this.createAccountButton)
  }
}
