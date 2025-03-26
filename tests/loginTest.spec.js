const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser@example.com', 'password123');
  await loginPage.verifyLogin();
});
