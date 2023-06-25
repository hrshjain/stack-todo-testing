import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly tasksDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tasksDropdown = this.page.getByRole('link', { name: 'Tasks', exact: true });
  }

  async clickOnTasksDropdown() {
    await this.tasksDropdown.click();
  }

  async addTask(){
    await this.page.getByRole('link', { name: 'Add Task' }).click();
  }
}