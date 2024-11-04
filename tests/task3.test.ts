import {expect, test} from "@playwright/test";


test('checkbox and radio', async ({page}) => {
  await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');

  const button1 = await page.$('[for=radio-1]');
  const checkbox1 = await page.$('[for=checkbox-4]');
  const checkbox2 = await page.$('[for=checkbox-nested-3]');
  const checkbox3 = await page.$('[for=checkbox-nested-4]');

  await button1.click();
  await checkbox1.click();
  await checkbox2.click();
  await checkbox3.click();
  await page.waitForTimeout(1000);

  const backgroundColor1 = await button1.evaluate((node) => getComputedStyle(node).getPropertyValue('background-color'));
  const backgroundColor2 = await checkbox1.evaluate((node) => getComputedStyle(node).getPropertyValue('background-color'));
  const backgroundColor3 = await checkbox2.evaluate((node) => getComputedStyle(node).getPropertyValue('background-color'));
  const backgroundColor4 = await checkbox3.evaluate((node) => getComputedStyle(node).getPropertyValue('background-color'));

  expect(backgroundColor1 && backgroundColor2 && backgroundColor3 && backgroundColor4).toBe('rgb(0, 127, 255)')

  await page.locator("[for=radio-1]");
  await page.locator("[for=checkbox-4]");
  await page.locator("[for=checkbox-nested-3]");
  await page.locator("[for=checkbox-nested-4]");
});