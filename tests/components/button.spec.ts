import test, { expect } from "@playwright/test";

const getUrl = (baseURL: string | undefined, id: string) => {
    if (!baseURL) return '';

    const queryParams = {
        id,
        viewMode: 'story',
    };

    const url = new URL('/iframe.html', baseURL);
    Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    return url.toString();
}

test('button', async ({ page, baseURL }) => {
    const url = getUrl(baseURL, 'example-button--primary');
    
    await page.goto(url);
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot();
});