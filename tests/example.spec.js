// @ts-check
import { test, expect } from '@playwright/test';
const logger= require('../Logger/logger.js');

test('has title', async ({ page }) => {
  logger.info("Test started");
  await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

  
});


