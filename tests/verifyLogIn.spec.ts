import { test, expect } from '@playwright/test';

test('Verify log in @verifyLogin', async ({ page }) => {

  test.info().annotations.push(({
    type: 'Test',
    description: 'This test verifies a success login process for an admin user on DemoBlaze'
  }));
  
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();

  const wellcomeMessage = page.locator('#nameofuser');
  await expect(wellcomeMessage).toHaveText('Welcome admin');
});