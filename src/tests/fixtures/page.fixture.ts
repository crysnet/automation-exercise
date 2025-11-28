import { test as base } from "@playwright/test";
import { HomePage } from "src/tests/pages/Home.page";
import { SignupPage } from "src/tests/pages/Signup.page";

interface PageObjectFixture {
  homePage: HomePage;
  signupPage: SignupPage;
}

export const test = base.extend<PageObjectFixture>({
  homePage: async ({ page }, use) => {
    const todoPage = new HomePage(page);
    await use(todoPage);
  },
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await use(signupPage);
  },
});
