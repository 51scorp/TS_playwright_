const {test, expect} = require('@playwright/test');

test('click test', async ({page}) => {
  await page.goto('http://uitestingplayground.com/click');
  const button = await page.$('#badButton');
  if (!button) {
    throw new Error('Кнопка не найдена!');
  }
  await page.click('#badButton')
  await page.waitForTimeout(1000);
  const backgroundColor = await button.evaluate((node) => getComputedStyle(node).getPropertyValue('background-color'));
  expect(backgroundColor).toBe('rgb(33, 136, 56)');
  await page.locator("#badButton");
});