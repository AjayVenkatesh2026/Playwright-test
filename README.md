# Vite + React + Storybook + Playwright

This project is scaffolded with Vite (React + TypeScript), Storybook, and Playwright (E2E + component testing).

Quick start

1. Install dependencies

   ```npm install```

2. Run dev server

   ```npm run dev```

3. Run Storybook

   ```npm run storybook```

4. Run Playwright Pixel Perfection tests

   ```npm run test:ci```


Notes

- Storybook runs on port 6006 by default.
- Vite dev server runs on port 5173 by default.
- Playwright is configured to start Storybook and Vite as needed when running tests via the webServer entries in `playwright.config.ts`.
