import { test as base } from "@playwright/test";
import { HomePage } from "@/pages/Home.page";
import { LoginPage } from "@/pages/Login.page";
import { SignupPage } from "@/pages/Signup.page";
import { AccountCreatedPage } from "@/pages/AccountCreated.page";
import { DeleteAccountPage } from "@/pages/DeleteAccount.page";

interface PageObjectFixture {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  accountCreatedPage: AccountCreatedPage;
  deleteAccountPage: DeleteAccountPage;
}

export const test = base.extend<PageObjectFixture>({
  homePage: async ({ page }, use) => {
    const todoPage = new HomePage(page);
    await use(todoPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await use(signupPage);
  },
  accountCreatedPage: async ({ page }, use) => {
    const accountCreatedPage = new AccountCreatedPage(page);
    await use(accountCreatedPage);
  },
  deleteAccountPage: async ({ page }, use) => {
    const deleteAccountPage = new DeleteAccountPage(page);
    await use(deleteAccountPage);
  },
});
