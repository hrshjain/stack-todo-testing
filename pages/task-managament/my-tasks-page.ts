import { expect, Locator, Page } from '@playwright/test';

export class MyTasksPage {
  readonly page: Page;

  readonly taskList: Locator;
  readonly taskListWithButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.taskList = this.page.locator('tbody tr td').filter({ hasNot: this.page.locator('.btn-group') })
    this.taskListWithButtons = this.page.locator('tbody tr')
  }

  async verifyTaskList(tasks: string[]){
   expect(await this.taskList.allTextContents()).toEqual(tasks);
  }

  async verifySpecificTasksDoNotExistsInMyTasks(task: string){
    expect(await this.taskList.allTextContents()).not.toContain(task);
  }

  async findSpecificTask(task: string){
    expect(await this.taskList.allTextContents()).toContain(task);
  }

  async viewSpecificTask(task: string){
    this.taskListWithButtons.filter({ hasText: task })
                            .getByRole('link', { name: 'View' })
                            .click({ force: true });
  }

  async editSpecificTask(task: string){
    this.taskListWithButtons.filter({ hasText: task })
                            .getByRole('link', { name: 'Edit' })
                            .click({ force: true });
  }

  async deleteSpecificTask(task: string){
    this.taskListWithButtons.filter({ hasText: task })
                            .locator('.btn.btn-outline-danger')
                            .click();

  
  }

}