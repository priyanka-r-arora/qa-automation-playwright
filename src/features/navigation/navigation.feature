Feature: Navigation

Scenario: Should Navigate to Invoices page using the menu
    Given I am on the Home page
    When I click the "Invoices" menu item
    Then I should be redirected to the "Home/Invoices" page URL
    And the page title should be "Invoices - qa_automation_frontend"

Scenario: Should Navigate to Privacy page using the menu
    Given I am on the Home page
    When I click the "Privacy" menu item
    Then I should be redirected to the "Home/Privacy" page URL
    And the page title should be "Privacy Policy - qa_automation_frontend"

Scenario: Should Navigate to Home page using the menu
    Given I am on the Invoices page
    When I click the "Home" menu item
    Then I should be redirected to the "/" page URL
    And the page title should be "Home Page - qa_automation_frontend"

