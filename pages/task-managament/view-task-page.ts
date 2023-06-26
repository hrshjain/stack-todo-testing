import { expect, Locator, Page } from '@playwright/test';

export class ViewTaskPage {
  readonly page: Page;

  readonly taskBody: Locator;

  constructor(page: Page) {
    this.page = page;

    this.taskBody = this.page.locator('.card-body .card-text')
  }
  
  async verifyTaskBody(task: string){
    await expect(this.taskBody).toHaveText(task);
  }
}