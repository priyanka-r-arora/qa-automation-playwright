import { Given, When, Then } from "../../../bdd-setup";
import { expect } from "@playwright/test";
import { HomePage } from "../../page-objects/home-page";
import config from "../../config";

Given("I am on the Home page", async ({ page }) => {
  const homepage = new HomePage(page);
  await homepage.visit();
});

When("I click the {string} menu item", async ({ page }, menuName: string) => {
  const homepage = new HomePage(page);
  await homepage.getMenuButton(menuName).click();
});

Then("I should be redirected to the {string} page URL", async ({ page }, pagePath: string) => {
  await expect(page).toHaveURL(config.pageUrl(pagePath));
});

Then("the page title should be {string}", async ({ page }, expectedTitle: string) => {
  await expect(page).toHaveTitle(expectedTitle);
});
