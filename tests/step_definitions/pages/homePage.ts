const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

// SELECTORS SECTION
const SELECTORS = {
  mainTitle: "#main-title",
};

// END SECTION

// ACTIONS SECTION
async function openHomePage() {
  await global.page.goto("https://practice.expandtesting.com/");
}

// END SECTION

// ASSERTIONS SECTION
async function assertTitle(expectedTitle: string) {
  const title = global.page.locator(SELECTORS.mainTitle);
  await expect(title).toHaveText(expectedTitle);
}

// END SECTION

Given("I open the homepage", async () => {
  await openHomePage();
});

Then(
  "I should see the page title as {string}",
  async (expectedTitle: string) => {
    await assertTitle(expectedTitle);
  },
);
