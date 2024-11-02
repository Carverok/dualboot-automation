import { test, expect } from '@playwright/test'; // Import Playwright's test and expect functions
import { faker } from '@faker-js/faker'; // Import faker for generating random test data
import { LoginHelper } from '../helpers/LoginHelper'; // Import custom LoginHelper class for login/logout functionality

// Before each test, log in with admin credentials
test.beforeEach(async ({ page }) => {
    const loginHelper = new LoginHelper(page, 'admin', 'admin'); // Instantiate LoginHelper with page and credentials
    await loginHelper.login(); // Execute the login process
});

// After each test, log out
test.afterEach(async ({ page }) => {
    const loginHelper = new LoginHelper(page, 'admin', 'admin'); // Reuse LoginHelper instance for logout
    await loginHelper.logout(); // Execute the logout process
});

// Test case to purchase a product on Demoblaze
test('@purchaseProduct', async ({ page }) => {
    // Add a test annotation to provide metadata
    test.info().annotations.push(({
        type: 'Test',
        description: 'This test aims to verify a successful purchase on Demoblaze' // Description of the test purpose
    }));

    // Navigate to the Samsung Galaxy S6 product page and add it to the cart
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click(); // Click on the product link
    await page.getByRole('link', { name: 'Add to cart' }).click(); // Click 'Add to cart' button
    await page.getByRole('link', { name: 'Cart', exact: true }).click(); // Open the cart page
    await page.getByRole('button', { name: 'Place Order' }).click(); // Click 'Place Order' button

    // Generate random data for the purchase form using faker
    const randomName = faker.person.firstName();
    const randomCountry = faker.location.country();
    const randomCity = faker.location.city();
    const randomCreditCardNumber = faker.finance.creditCardNumber();
    const randomMonth = faker.date.month({ context: true });
    const randomYear = faker.number.int({ min: 1990, max: 2024 });

    // Fill in the order form with generated random data
    await page.getByLabel('Total:').click();
    await page.getByLabel('Total:').fill(randomName); // Fill in name
    await page.getByLabel('Country:').click();
    await page.getByLabel('Country:').fill(randomCountry); // Fill in country
    await page.getByLabel('City:').click();
    await page.getByLabel('City:').fill(randomCity); // Fill in city
    await page.getByLabel('Credit card:').click();
    await page.getByLabel('Credit card:').fill(randomCreditCardNumber); // Fill in credit card number
    await page.getByLabel('Month:').click();
    await page.getByLabel('Month:').fill(randomMonth); // Fill in month
    await page.getByLabel('Year:').click();
    await page.getByLabel('Year:').fill(String(randomYear)); // Fill in year

    // Complete the purchase
    await page.getByRole('button', { name: 'Purchase' }).click(); // Click 'Purchase' button
    
    // Verify the success message
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible(); // Confirm purchase success message

    // Close the confirmation dialog
    await page.getByRole('button', { name: 'OK' }).click(); // Click 'OK' button to close the confirmation
});
