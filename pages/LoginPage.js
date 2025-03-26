const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email'); // Use simpler selector, as XPath might be unnecessary here
    this.passwordInput = page.locator('#password'); // Use simpler selector
    this.loginButton = page.locator('//*[@id="root"]/div/div[1]/div[2]/div/form/button'); // Assuming the button type is submit, otherwise adjust accordingly
  }

  async goto() {
    await this.page.goto('http://localhost:5173/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    // Ensure the button is visible and enabled before clicking
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }

  async verifyLogin() {
    // Verify if redirected to the feed page
    await expect(this.page).toHaveURL('http://localhost:5173/feed', { timeout: 20000 });
  }
}

module.exports = LoginPage;
