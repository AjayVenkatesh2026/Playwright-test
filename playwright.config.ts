import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: [
    { command: 'npm run storybook', port: 6006, reuseExistingServer: true },
    { command: 'npm run dev', port: 5173, reuseExistingServer: true },
  ],
  // Component testing config (Vite + React)
  ct: { framework: 'react', viteConfig: './vite.config.ts' },
});
