import { expect, Locator, Page } from '@playwright/test';

interface user {
  "email": string
}

export class LoginPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL);
  }

  async enterCredentials() {
    
  }

  async clickSignInButton() {
    
  }
}