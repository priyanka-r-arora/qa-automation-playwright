Feature: Invoices Page Validation

 Scenario: Verify the sum of all invoices is correct in the summary row
    Given I am on the Invoices page
    When I sum all the invoice amounts in the table
    Then the total invoices sum should match the amount in the summary row

Scenario: Verify the amount for invoice number 'I634'
    Given I am on the Invoices page
    When I look up the amount for invoice "I634"
    Then the amount should be "423.99 EUR"