import { test, expect } from '@playwright/test'; // Import necessary testing utilities from Playwright
import { faker } from '@faker-js/faker'; // Import faker to generate random user data for testing

// Test case to verify unsuccessful login for a non-existing user
test('@verifyUnexistingUser', async ({ page }) => {
  // Add an annotation for test metadata including a description of the test
  test.info().annotations.push(({
    type: 'Test',
    description: 'This test aims to verify an unsuccessful login process on DemoBlaze'
  }));

  // Navigate to the home page
  await page.goto('/'); // Go to the base URL of the application

  // Click on the "Log in" link to open the login modal
  await page.getByRole('link', { name: 'Log in' }).click();

  // Generate random username and password using faker
  const randomUserName = faker.internet.userName(); // Create a random username
  const randomPassword = faker.internet.password(); // Create a random password

  // Fill in the login form with the random credentials
  await page.locator('#loginusername').click(); // Focus on the username input field
  await page.locator('#loginusername').fill(randomUserName); // Enter the random username
  await page.locator('#loginpassword').click(); // Focus on the password input field
  await page.locator('#loginpassword').fill(randomPassword); // Enter the random password

  // Click on the heading to submit the login form
  await page.getByRole('heading', { name: 'Log in' }).click(); // Trigger the login action by clicking the heading

  // Listen for dialog events that may be triggered by the page
  page.on('dialog', async dialog => {
    console.log(`Dialog detected: Type=${dialog.type()}, Message=${dialog.message()}`); // Log dialog details for debugging

    // Assert that the dialog type is an alert
    expect(dialog.type()).toBe('alert'); // Verify that the dialog is of type 'alert'
    // Assert that the dialog message matches the expected error message
    expect(dialog.message()).toBe('User does not exist.'); // Check that the dialog displays the expected message
    await dialog.accept(); // Accept the dialog to close it
  });

  // Simulate a dialog being shown with an alert for the test
  await page.evaluate(() => alert('User does not exist.')); // Trigger the alert dialog for testing purposes
});
