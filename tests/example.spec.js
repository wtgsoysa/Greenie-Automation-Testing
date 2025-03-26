// @ts-check
import { test, expect } from '@playwright/test';

// Test to check if the title contains 'Playwright'
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', { timeout: 60000 }); // Increased timeout

  // Expect a title to contain 'Playwright'
  await expect(page).toHaveTitle(/Playwright/);
});

// Test to verify the 'Get started' link and Installation page
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/', { timeout: 60000 });

  // Click the 'Get started' link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect the Installation heading to be visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible({ timeout: 10000 });
});