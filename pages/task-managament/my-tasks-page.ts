import { expect, Locator, Page } from '@playwright/test';

export class MyTasksPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(){

  }

  async getTaskList(){
    
  }

  async verifyTaskList(){
    
  }

  async verifySpecificTaskExistsInMyTasks(task){
    
  }

  async verifySpecificTasksDoNotExistsInMyTasks(task){
    
  }

  async viewSpecificTask(task){

  }

  async editSpecificTask(task){

  }

  async deleteSpecificTask(task){

  }
}