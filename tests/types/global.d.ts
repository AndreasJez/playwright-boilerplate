import { Page, Browser } from "@playwright/test";

declare global {
  var page: Page;
  var browser: Browser;
}

export {};
