import { expect, Locator, Page } from '@playwright/test';

export class EditTaskPage {
  readonly page: Page;

  readonly taskInput: Locator;
  readonly saveTaskButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.taskInput = this.page.locator('#task');
    this.saveTaskButton = this.page.getByRole('button', { name: 'Save Task' });
  }

  async enterNewTaskData(task: string){
    this.taskInput.fill("");
    this.taskInput.fill(task);
  }

  async clickSaveTaskButton(){
    await this.saveTaskButton.click();
  }
}