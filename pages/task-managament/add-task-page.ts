import { expect, Locator, Page } from '@playwright/test';

export class AddTaskPage {
  readonly page: Page;

  readonly taskInput: Locator;
  readonly saveTaskButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.taskInput = this.page.getByLabel('Your Task');
    this.saveTaskButton = this.page.getByRole('button', { name: 'Save Task' });
  }

  async enterTaskData(task: string){
    await this.taskInput.fill(task);
  }

  async clickSaveTaskButton(){
    await this.saveTaskButton.click();
  }
}