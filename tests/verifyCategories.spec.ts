import { test, expect } from '@playwright/test'; // Import test utilities from Playwright
import { LoginHelper } from '../helpers/LoginHelper'; // Import the LoginHelper class for login/logout functionality

// Before each test, perform the login action
test.beforeEach(async ({ page }) => {
  const loginHelper = new LoginHelper(page, 'admin', 'admin'); // Initialize LoginHelper with credentials
  await loginHelper.login(); // Call the login method to log into the application
});

// After each test, perform the logout action
test.afterEach(async ({ page }) => {
  const loginHelper = new LoginHelper(page, 'admin', 'admin'); // Reuse LoginHelper instance for logout
  await loginHelper.logout(); // Call the logout method to end the session
});

// Test to verify the presence and functionality of the categories section
test('@verifyCategories', async ({ page }) => {
  // Add an annotation for test metadata with a description
  test.info().annotations.push(({
    type: 'Test',
    description: 'This test aims to verify the categories section on Demoblaze' // Describe the test purpose
  }));

  // Interact with the CATEGORIES link
  await page.getByRole('link', { name: 'CATEGORIES' }).click(); // Click on the 'CATEGORIES' section

  // Verify subcategory navigation
  await page.getByRole('link', { name: 'Phones' }).click(); // Click on 'Phones' category link
  await page.getByRole('link', { name: 'Laptops' }).click(); // Click on 'Laptops' category link
  await page.getByRole('link', { name: 'Monitors' }).click(); // Click on 'Monitors' category link
});
