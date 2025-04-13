const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
import { Page, Browser } from "playwright";

let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  global.page = await context.newPage();
});

After(async function () {
  if (global.page) {
    await global.page.close();
  }
  if (global.browser) {
    await global.browser.close();
  }
});

// Make page globally available
declare global {
  var page: Page;
}
