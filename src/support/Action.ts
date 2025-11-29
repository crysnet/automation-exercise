import { Locator } from '@playwright/test'
import { ACTION_TIMEOUT } from '@/constants/timeout'

export class Action {
  async click(element: Locator, timeout: number = ACTION_TIMEOUT) {
    await this.scrollIntoViewElement(element, timeout)
    await element.click({ timeout })
  }

  async setValue(element: Locator, value: string, timeout: number = ACTION_TIMEOUT) {
    await this.scrollIntoViewElement(element)
    await element.clear()
    await element.fill(value, { timeout })
  }

  async waitForToBeVisible(element: Locator, timeout: number = ACTION_TIMEOUT) {
    await element.waitFor({ state: 'visible', timeout })
  }

  async waitForToBeAttached(element: Locator, timeout: number = ACTION_TIMEOUT) {
    await element.waitFor({ state: 'attached', timeout })
  }

  async selectOption(element: Locator, value: string, timeout: number = ACTION_TIMEOUT) {
    await this.scrollIntoViewElement(element, timeout)
    await element.selectOption(value)
  }

  async setChecked(element: Locator, checked: boolean = true, timeout: number = ACTION_TIMEOUT) {
    await this.scrollIntoViewElement(element, timeout)
    await element.setChecked(checked)
  }

  async scrollIntoViewElement(element: Locator, timeout: number = ACTION_TIMEOUT) {
    await this.waitForToBeAttached(element, timeout)
    await element.scrollIntoViewIfNeeded({ timeout })
  }
}
