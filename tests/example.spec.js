// @ts-check
import { test, expect } from '@playwright/test';
const logger= require('../Logger/logger.js');

test('@smoke has smoke title', async ({ page }) => {
  logger.info("Test started");
  await page.goto("/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

  
});
test('@regression has regression title', async ({ page }) => {
  logger.info("Test started for regression");
 await page.goto("/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

  
});


