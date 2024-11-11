import {test, expect} from '@playwright/test';

test('get image caption', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  await page.locator(`.figure`).nth(1).hover();
  await expect(page.locator(`.figcaption`).nth(1)).toBeVisible();
});
