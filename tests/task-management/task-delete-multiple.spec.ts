import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/login-page';
import { MyTasksPage } from '../../pages/task-managament/my-tasks-page';
import tasks  from '../../test-data/tasks/tasks.json'

test.describe("Delete 2 or more tasks and verify remaining tasks", () => {
  test('Deleting two or more tasks belonging to an user results in only one task being left\
        displayed on the task table', async ({ page }) => {
    /** Precondition:  an existing task is present in the application using db:migrate/API/UI */

   // navigate and login into stack to do application
   await test.step("1: User logs into stacktodo testing", async() => {
     const loginPage = new LoginPage(page);
     await loginPage.goto();
     await loginPage.enterCredentials(process.env.USER6_LOGIN_ID, process.env.USER6_LOGIN_PASSWORD);
     await loginPage.clickSignInButton();
   })

   // delete two tasks in my tasks page
   await test.step("2: User deletes two specific tasks ", async() => {
     const myTasksPage = new MyTasksPage(page);
     await myTasksPage.deleteSpecificTask(tasks.task_list_user6.task1);
     await myTasksPage.deleteSpecificTask(tasks.task_list_user6.task2);
   })
   
   // verify two tasks are deleted from my tasks page
   await test.step("3: User verifies the two task are deleted from My tasks page ", async() => {
     const myTasksPage = new MyTasksPage(page);
     await myTasksPage.verifySpecificTasksDoNotExistsInMyTasks(tasks.task_list_user6.task1);
     await myTasksPage.verifySpecificTasksDoNotExistsInMyTasks(tasks.task_list_user6.task2);
   })

     // verify the task 3 is not deleted from my tasks page
     await test.step("3: User verifies the two task are deleted from My tasks page ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.findSpecificTask(tasks.task_list_user6.task3);
    })
 });

});
