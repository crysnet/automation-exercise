import * as allure from 'allure-js-commons'
import { test } from '@/fixtures/page.fixture'
import { accountSchema } from '@/fixtures/data/schemas/account.schema'
import accountJson from '@/fixtures/data/account.data.json'

const account = accountSchema.parse(accountJson)

test.describe('Signup Feature Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate()
    await allure.step(`Navigate to home page: ${homePage.page.url()}`, async () => {
      await homePage.assertHomePageVisible()
    })
  })

  test('Test Case 1: Register User', async ({
    homePage,
    loginPage,
    signupPage,
    accountCreatedPage,
    deleteAccountPage,
  }) => {
    await allure.step("Click on 'Signup / Login' button", async () => {
      await homePage.clickOnSignupLink()
    })

    await allure.step("Verify 'New User Signup!' is visible", async () => {
      await loginPage.assertPageToHaveTitle('Automation Exercise - Signup / Login')
      await loginPage.assertNewUserSignupIsVisible()
    })

    await allure.step("Enter name and email address and click 'Signup' button", async () => {
      await loginPage.signup(account.name, account.email)
    })

    await allure.step("Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
      await signupPage.assertPageToHaveTitle('Automation Exercise - Signup')
    })

    await allure.step('Fill details: Title, Name, Email, Password, Date of birth, Select checkboxes', async () => {
      await signupPage.completeAccountInformationForm({
        title: account.title,
        name: account.name,
        password: account.password,
        dateOfBirth: account.dateOfBirth,
      })
    })

    await allure.step(
      'Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number',
      async () => {
        await signupPage.completeAddressInformationForm(account.address)
      }
    )

    await allure.step("Click 'Create Account' button", async () => {
      await signupPage.clickOnCreateAccountButton()
    })

    await allure.step("Verify that 'ACCOUNT CREATED!' is visible", async () => {
      await accountCreatedPage.assertTitleIsVisible()
    })

    await allure.step("Click 'Continue' button", async () => {
      await accountCreatedPage.clickOnContinueButton()
    })

    await allure.step("Verify that 'Logged in as username' is visible", async () => {
      await homePage.assertLoggedInAs(account.name)
    })

    await allure.step("Click 'Delete Account' button", async () => {
      await homePage.clickOnDeleteAccountButton()
    })

    await allure.step("Verify that 'ACCOUNT DELETED!' is visible", async () => {
      await deleteAccountPage.assertDeletedTitleIsVisible()
    })
  })
})
