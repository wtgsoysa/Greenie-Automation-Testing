const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');

test('Register with valid details', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  // Navigate to registration page
  await registrationPage.goto();

  // Register with valid details
  await registrationPage.register('Test User', 'testuser@example.com', 'password123');

  
});
