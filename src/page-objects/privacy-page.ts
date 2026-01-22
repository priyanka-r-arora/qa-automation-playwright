import { Locator, Page } from "@playwright/test";
import config from "../config";

export class PrivacyPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;  
  }

  public async visit(): Promise<void> {
    await this.page.goto(config.pageUrl("Home/Privacy"));
    await this.page.waitForLoadState("networkidle");
  }
}
