import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Purchase a product @purchaseProduct', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();

    const randomName = faker.person.firstName();
    const randomCountry = faker.location.country();
    const randomCity = faker.location.city();
    const randomCreditCardNumber = faker.finance.creditCardNumber();
    const randomMonth = faker.date.month({ context: true });
    const ramdomYear = faker.number.int({ min: 1990, max: 2024 });

    await page.getByLabel('Total:').click();
    await page.getByLabel('Total:').fill(randomName);
    await page.getByLabel('Country:').click();
    await page.getByLabel('Country:').fill(randomCountry);
    await page.getByLabel('City:').click();
    await page.getByLabel('City:').fill(randomCity);
    await page.getByLabel('Credit card:').click();
    await page.getByLabel('Credit card:').fill(randomCreditCardNumber);
    await page.getByLabel('Month:').click();
    await page.getByLabel('Month:').fill(randomMonth);
    await page.getByLabel('Year:').click();
    await page.getByLabel('Year:').fill(String(ramdomYear));
    await page.getByRole('button', { name: 'Purchase' }).click();
    
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible();

    await page.getByRole('button', { name: 'OK' }).click();
});