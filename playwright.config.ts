import {defineConfig, devices} from '@playwright/test';
import {defineBddConfig} from "playwright-bdd";

const testBdd = defineBddConfig({
    outputDir: '.features',
    paths: ['./tests/features/*.feature'],
    require: ['./tests/steps/*.ts'],
    importTestFrom: './tests/pages/bankFixture.ts'
})

export default defineConfig({
    testDir: testBdd,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
        video: 'on'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },

        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },

        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
    ],
});
