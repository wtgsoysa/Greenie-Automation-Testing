const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuserexample.com', 'password');
  
});
