import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.jobs/en/',
    viewportWidth: 1400,
    viewportHeight: 1200,
    chromeWebSecurity: false,
    modifyObstructiveCode: true,
  },
});
