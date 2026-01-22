import { Page, Locator } from "@playwright/test";
import config from "../config";

export class HomePage {
  page: Page;
  homeMenuButton: Locator;
  invoicesMenuButton: Locator;
  privacyMenuButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.homeMenuButton = page.locator("#nav-item-link-home");
    this.invoicesMenuButton = page.locator("#nav-item-link-invoices");
    this.privacyMenuButton = page.locator("#nav-item-link-privacy")
  }

  public async visit(): Promise<void> {
    await this.page.goto(config.pageUrl("Home"));
    await this.page.waitForLoadState("networkidle");
  }

  public getMenuButton(menuName: string): Locator {
    switch (menuName) {
      case "Home":
        return this.homeMenuButton;
      case "Invoices":
        return this.invoicesMenuButton;
      case "Privacy":
        return this.privacyMenuButton;
      default:
        throw new Error(`Menu item "${menuName}" not found`);
    }
  }
}
