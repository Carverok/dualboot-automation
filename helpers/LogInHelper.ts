import { Page } from '@playwright/test'; // Import Page type from Playwright

// Define the LoginHelper class to handle login and logout actions
export class LoginHelper {
    private page: Page; // Page object for browser interaction
    private username: string; // Username for login
    private password: string; // Password for login

    // Constructor initializes the page, username, and password
    constructor(page: Page, username: string, password: string) {
        this.page = page; // Set the page instance
        this.username = username; // Set the provided username
        this.password = password; // Set the provided password
    }

    // Method to log into the application
    async login(): Promise<void> {
        await this.page.goto('/'); // Navigate to the base URL
        await this.page.getByRole('link', { name: 'Log in' }).click(); // Click on the 'Log in' link

        // Enter username
        await this.page.locator('#loginusername').click(); // Click the username field
        await this.page.locator('#loginusername').fill(this.username); // Fill in the username

        // Enter password
        await this.page.locator('#loginpassword').click(); // Click the password field
        await this.page.locator('#loginpassword').fill(this.password); // Fill in the password

        // Submit login
        await this.page.getByRole('button', { name: 'Log in' }).click(); // Click the 'Log in' button to submit
    }

    // Method to log out of the application
    async logout(): Promise<void> {
        await this.page.getByRole('link', { name: 'Log out' }).click(); // Click on the 'Log out' link
    }
}
