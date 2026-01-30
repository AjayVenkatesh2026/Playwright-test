import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: 'data-testid',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Deskotp Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Portrait Chrome',
      use: { ...devices['iPhone 12 Pro'] },
    },
    {
      name: 'Mobile Portrait Safari',
      use: { ...devices['iPhone 12 Pro'] },
    },
    {
      name: 'Mobile Landscape Chrome',
      use: { ...devices['iPhone 12 Pro landscape'] },
    },
    {
      name: 'Mobile Landscape Safari',
      use: { ...devices['iPhone 12 Pro landscape'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI ? 'npx http-server storybook-static -p 6006' : 'npm run storybook',
    port: 6006,
    reuseExistingServer: !process.env.CI,
  },
});
