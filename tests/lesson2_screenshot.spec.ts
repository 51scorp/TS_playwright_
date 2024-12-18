import {test} from '@playwright/test';

test('lesson2_screenshot', async ({page}) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  const container = page.locator('.container').nth(0);
  await page.screenshot({path: 'test-results/screenshots/body.png'});
  await container.screenshot({path: 'test-results/screenshots/container.png'});
});