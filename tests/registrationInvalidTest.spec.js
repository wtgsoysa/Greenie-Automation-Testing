const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');

test('Verify User registration with invalid email', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  // Navigate to registration page
  await registrationPage.goto();

  // Perform registration with invalid email
  await registrationPage.register('Test User', 'testuser.com', 'password123');

  
});
