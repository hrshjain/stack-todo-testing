import { expect, Locator, Page } from '@playwright/test';

export class EditTaskPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterNewTaskData(task){

  }

  async clickSaveTaskButton(){
    
  }
}