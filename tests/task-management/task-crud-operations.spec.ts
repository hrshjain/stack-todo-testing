import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/login-page';
import { HomePage } from '../../pages/home/home-page';
import { AddTaskPage } from '../../pages/task-managament/add-task-page';
import { MyTasksPage } from '../../pages/task-managament/my-tasks-page';
import { ViewTaskPage } from '../../pages/task-managament/view-task-page';
import { EditTaskPage } from '../../pages/task-managament/edit-task-page';
import tasks  from '../../test-data/tasks/tasks.json'

test.describe("CRUD Operations for StackTodo Application", () => {

  test('Add a new task and view it', async ({ page }) => {

    // navigate and login into stack to do application
    await test.step("1: User logs into stacktodo testing", async() => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.enterCredentials(process.env.USER1_LOGIN_ID, process.env.USER1_LOGIN_PASSWORD);
      await loginPage.clickSignInButton();
    })

    // navigate to tasks dropdown and add a task
    await test.step("2: User navigates to Tasks dropdown and creates new task", async() => {
      const homePage = new HomePage(page);
      await homePage.clickOnTasksDropdown();
      await homePage.addTask();
    })
    
    // enter the tasks details and save task
    await test.step("3: User enters details of the task and clicks save button", async() => {
      const addTaskPage = new AddTaskPage(page);
      await addTaskPage.enterTaskData(tasks.task1.data);
      await addTaskPage.clickSaveTaskButton();
    })

    // view the task just created
    await test.step("4: User verifies that the task is created in my tasks page", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.findSpecificTask(tasks.task1.data);
    })
  });

  test('View an existing task', async ({ page }) => {
    /** Precondition:  an existing task is present in the application using db:migrate/API/UI */

    // navigate and login into stack to do application
    await test.step("1: User logs into stacktodo testing", async() => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.enterCredentials(process.env.USER2_LOGIN_ID, process.env.USER2_LOGIN_PASSWORD);
      await loginPage.clickSignInButton();
    })

    // view the task in my tasks page
    await test.step("2: User verifies that the task is created in my tasks and clicks on view button", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.findSpecificTask(tasks.task2.data);
      await myTasksPage.viewSpecificTask(tasks.task2.data);
    })

    // verfiy the task data in the view task page
    await test.step("3: User verifies the task data is as expected", async() => {
      const viewTaskPage = new ViewTaskPage(page);
      await viewTaskPage.verifyTaskBody(tasks.task2.data);
    })
  });


  test('Edit a new task and view it', async ({ page }) => {
    /** Precondition:  an existing task is present in the application using db:migrate/API/UI */

    // navigate and login into stack to do application
    await test.step("1: User logs into stacktodo testing", async() => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.enterCredentials();
      await loginPage.clickSignInButton();
    })

    // view the task in my tasks page
    await test.step("2: User selects and edits a specific task ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.editSpecificTask("abc");
    })

    // view the task in my tasks page
    await test.step("3: User updates task data and click Save button ", async() => {
      const editTaskPage = new EditTaskPage(page);
      await editTaskPage.enterNewTaskData("abc");
      await editTaskPage.clickSaveTaskButton();
    })

    // verfiy the new task data in the view task page
    await test.step("3: User verifies the new task data is as expected", async() => {
      const viewTaskPage = new ViewTaskPage(page);
      await viewTaskPage.getTaskBody();
      await viewTaskPage.verifyTaskBody("sample task");
      await viewTaskPage.getTaskLastUpdated();
      await viewTaskPage.verifyTaskLastUpdated("sample task");
    })


  });

  test('Delete an existing task', async ({ page }) => {
     /** Precondition:  an existing task is present in the application using db:migrate/API/UI */

    // navigate and login into stack to do application
    await test.step("1: User logs into stacktodo testing", async() => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.enterCredentials();
      await loginPage.clickSignInButton();
    })

    // delete the task in my tasks page
    await test.step("2: User selects and deletes a specific task ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.deleteSpecificTask("abc");
    })
    
    // verify the task is deleted from my tasks page
    await test.step("3: User verifies the task is deleted from My tasks page ", async() => {
      const myTasksPage = new MyTasksPage(page);
      await myTasksPage.verifySpecificTasksDoNotExistsInMyTasks("abc");
    })
  });

  test('Verify all existing tasks are displayed in My tasks List', async ({ page }) => {
    // Precondition: a list of 10 tasks exist in the application

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
  });
});
