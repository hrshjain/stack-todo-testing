import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = this.page.getByLabel('Email');
    this.passwordInput = this.page.getByLabel('Password');
    this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/login`);
  }

  async enterCredentials(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}