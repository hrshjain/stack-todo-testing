# stacktodo-testing

### Issue ###

The delete operation can be done manually but is not working using Playwright locator and methods. This will need more investigation.

### Set Up ###

1. Download Visual Studio Code

    https://code.visualstudio.com/download

2. Install node.js and npm

    https://nodejs.org/en/download/
    
3. Download and install git bash on your local.

    https://git-scm.com/downloads

4. Open git bash and clone git repo

    ```
    git clone <Repository Link>
    ```

5. Open terminal, navigate to directory saas-protect-testing and install npm libraries of the project
    ```
    npm install   
    ```

6. Open Terminal in VS Code and run command to get started with playwright test.
    ```
    npm init playwright@latest
    ```
    OR
    ```
    npx playwright install --with-deps
    ```

7. Open Terminal in VS Code and run command to add dependency and install browsers.
    ```
    npm i -D @playwright/test
    ```

8. Create a new .env file by copying contents from either .env.test or .env.dev
    ```
    cp .env.test .env
    ```

9. Run automated tests locally using the following commands:
    
    - Shortcut command (using package.json)
        ```
        npm run test
        ```
    - Headless mode
        ```
        npx playwright test
        ```
    - Headed mode
        ```
        npx playwright test --headed
        ```
    - Debuge the test
        ```
        npx playwright test --debug
        ```
    - Run tests in a specific folder 
        ```
        npx playwright test tests/<folder-name>
        ```
    - Run tests in a specific test file
        ```
        npx playwright test tests/<test-file-name>/
        npx playwright test tests/<folder-name>/<test-file-name>
        ```

### Access Test Reports ###

1. Playwright HTML report:
    ```
    npx playwright show-report
    ```
2. Allure report:
    - Once the tests are complete, html allure reports can be generated using following command:
        ```
        npx allure generate ./allure-results --clean
        ```
    - Once the report is generated use follong command to open it: 
        ```
        npx allure open ./allure-report
        ```
        
