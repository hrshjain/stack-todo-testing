import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/login-page';
import { HomePage } from '../../pages/home/home-page';
import { AddTaskPage } from '../../pages/task-managament/add-task-page';
import { MyTasksPage } from '../../pages/task-managament/my-tasks-page';
import { ViewTaskPage } from '../../pages/task-managament/view-task-page';
import { EditTaskPage } from '../../pages/task-managament/edit-task-page';


test.describe("Delete 2 or more tasks and verify remaining tasks", () => {

  test('Delete 2 tasks and verify remaining tasks are displayed in My tasks List', async ({ page }) => {
    /**  Precondition: a list of 10 tasks exist in the application */

    // navigate and login into stack to do application
    await test.step("1: User logs into stacktodo testing", async() => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.enterCredentials();
      await loginPage.clickSignInButton();
    })

    // verify all the existing tasks are present in my tasks page
    await test.step("2: User verifies all the existing tasks are present in My tasks page ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.verifySpecificTasksDoNotExistsInMyTasks("abc");
    })

    // delete (n -1) task in my tasks page
    await test.step("3: User selects and deletes a specific task ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.deleteSpecificTask("abc");
    })

    // verify the tasks are deleted 
    await test.step("4: User verifies the task is deleted from My tasks page ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.verifySpecificTasksDoNotExistsInMyTasks("abc");
    })

    // verify the remaining task in my tasks page
    await test.step("5: User verifies remaining task is not deleted from My tasks page ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.verifySpecificTaskExistsInMyTasks("abc");
    })
  });
});
