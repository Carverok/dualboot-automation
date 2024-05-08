import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Verify error message for non registered user @verifyLoginError', async ({ page }) => {

await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();

  const randomUserName = faker.internet.userName();
  const randomUPassword = faker.internet.password();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill(randomUserName);
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill(randomUPassword);

  await page.getByRole('heading', { name: 'Log in' }).click();  
});  