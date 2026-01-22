import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "src/features/**/*.feature",
  steps: "src/features/**/steps.ts",
  missingSteps: "skip-scenario",
});

export default defineConfig({
  testDir: testDir,
  fullyParallel: true,
  timeout: 10 * 1000,
  retries: 1,
  workers: 4,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: [["line"], ["html"]],
  use: {
    ignoreHTTPSErrors: true,
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Desktop Firefoox",
      use: { ...devices["Desktop Firefox"] },
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 8"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 16"] },
    },
  ],
});
