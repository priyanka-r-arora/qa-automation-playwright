import { Page, Locator } from "@playwright/test";
import config from "../config";
import { convertAmountToNumber } from "../helpers";

export class InvoicesPage {
  page: Page;
  invoiceRows: Locator;
  summaryAmount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceRows = page.locator("tbody tr");
    this.summaryAmount = page.locator(".summary-row .number-cell");
  }

  public async visit(): Promise<void> {
    await this.page.goto(config.pageUrl("Home/Invoices"));
    await this.page.waitForLoadState("networkidle");
  }

  async getInvoiceAmount(invoiceNumber: string): Promise<string> {
    const rows: Locator = await this.invoiceRows;
    const rowsCount: number = await rows.count();

    for (let rowIndex = 0; rowIndex < rowsCount - 1; ++rowIndex) {
      const rowInvoiceNumber: string = (await rows.nth(rowIndex).locator("td").first().textContent()) ?? "";
      if (rowInvoiceNumber === invoiceNumber) {
        return (await rows.nth(rowIndex).locator("td.number-cell").textContent()) ?? "";
      }
    }
    throw new Error(`Invoice number "${invoiceNumber}" not found.`);
  }

  async sumAllInvoicesAmount(): Promise<number> {
    const rows = await this.invoiceRows;
    const rowsCount = await rows.count();
    let invoicesSum: number = 0;
    for (let rowIndex = 0; rowIndex < rowsCount - 1; ++rowIndex) {
      const rowInvoiceAmount: string = (await rows.nth(rowIndex).locator("td.number-cell").last().textContent()) ?? "";
      const invoiceAmount = convertAmountToNumber(rowInvoiceAmount);
      if (!isNaN(invoiceAmount)) {
        invoicesSum += invoiceAmount;
      }
    }
    return invoicesSum;
  }

  async getInvoicesSummaryAmount(): Promise<number> {
    const summaryText = (await this.summaryAmount.textContent()) ?? "";
    if (summaryText === "") {
      throw new Error("Invoices summary has no amount");
    }
    return convertAmountToNumber(summaryText);
  }
}
