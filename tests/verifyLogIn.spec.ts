import { test, expect } from '@playwright/test'; // Import necessary testing utilities from Playwright
import { LoginHelper } from '../helpers/LoginHelper'; // Import the LoginHelper class for handling login/logout operations

// Before each test runs, perform the login action
test.beforeEach(async ({ page }) => {
  const loginHelper = new LoginHelper(page, 'admin', 'admin'); // Create an instance of LoginHelper with admin credentials
  await loginHelper.login(); // Call the login method to log in the user
});

// After each test runs, perform the logout action
test.afterEach(async ({ page }) => {
  const loginHelper = new LoginHelper(page, 'admin', 'admin'); // Reuse the LoginHelper instance for logging out
  await loginHelper.logout(); // Call the logout method to log out the user
});

// Test case to verify successful login for an admin user
test('@verifyLogIn', async ({ page }) => {
  // Add an annotation for test metadata including a description of the test
  test.info().annotations.push(({
    type: 'Test',
    description: 'This test aims to verify a successful login process for an admin user on DemoBlaze'
  }));
  
  // Locate the welcome message element that displays the username
  const wellcomeMessage = page.locator('#nameofuser'); // Get the locator for the welcome message element
  // Assert that the welcome message contains the expected text indicating successful login
  await expect(wellcomeMessage).toHaveText('Welcome admin'); // Check that the text matches 'Welcome admin'
});
