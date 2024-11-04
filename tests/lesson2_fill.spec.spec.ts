import {test, expect} from '@playwright/test';

const BASE_URL = 'http://uitestingplayground.com/sampleapp';
const login = 'login';
const password = 'pwd';

test('lesson2_fill.spec', async ({page}) => {
  await page.goto(BASE_URL);
  const loginInput = await page.locator('[name="UserName"]');
  const passwordInput = await page.locator(`[name="Password"]`);
  const loginButton = await page.locator('#login');

  await expect(loginInput && passwordInput && loginButton).toBeVisible();

  await loginInput.fill(login);
  await passwordInput.fill(String(password));
  await loginButton.click();
  await page.waitForTimeout(1000);
  const linkElement = await page.locator('#loginstatus');
  await expect(linkElement).toHaveText(`Welcome, ${login}!`);
});