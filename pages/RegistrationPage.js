const { expect } = require('@playwright/test');
class RegistrationPage {
    constructor(page) {
      this.page = page;
      this.nameInput = page.locator('#name'); // Name input field
      this.emailInput = page.locator('#email'); // Email input field
      this.passwordInput = page.locator('#password'); // Password input field
      this.submitButton = page.locator('//*[@id="root"]/div/div[1]/div[2]/div/form/button'); // Submit button
     
    }
  
    // Navigate to the registration page
    async goto() {
      await this.page.goto('http://localhost:5173/register'); // Replace with the actual URL of the registration page
    }
  
    // Register with the given details
    async register(name, email, password) {
      await this.nameInput.fill(name); // Fill in the name input
      await this.emailInput.fill(email); // Fill in the email input
      await this.passwordInput.fill(password); // Fill in the password input
      await this.submitButton.click(); // Click the submit button
    }
  
    
  }
  
  module.exports = RegistrationPage;
  