import { Given, When, Then } from "../../../bdd-setup";
import { expect } from "@playwright/test";
import { InvoicesPage } from "../../page-objects/invoices-page";
let invoiceAmount: string;
let totalInvoicesSum: number;

Given("I am on the Invoices page", async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  await invoicesPage.visit();
});

When("I look up the amount for invoice {string}", async ({ page }, invoiceNumber: string) => {
  const invoicesPage = new InvoicesPage(page);
  invoiceAmount = await invoicesPage.getInvoiceAmount(invoiceNumber);
});

Then("the amount should be {string}", async ({}, expectedInvoiceAmount: string) => {
  await expect(invoiceAmount).toEqual(expectedInvoiceAmount);
});

When("I sum all the invoice amounts in the table", async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  totalInvoicesSum = await invoicesPage.sumAllInvoicesAmount();
});

Then("the total invoices sum should match the amount in the summary row", async ({ page }) => {
  const invoicesPage = new InvoicesPage(page);
  const invoicesSummaryAmount: number = await invoicesPage.getInvoicesSummaryAmount();
  await expect(totalInvoicesSum).toEqual(invoicesSummaryAmount);
});
