import {test, expect} from '@playwright/test';

const BASE_URL = 'http://uitestingplayground.com/sampleapp';
const login = 'login';
const password = 'pwd';

test('lesson2_fill.spec', async ({page: {goto, locator, waitForTimeout}}) => {
  await goto(BASE_URL);
  const [loginInput, passwordInput, loginButton] = await Promise.all([locator('[name="UserName"]'), locator(`[name="Password"]`), locator('#login')]);
  await expect(loginInput && passwordInput && loginButton).toBeVisible();
  await loginInput.fill(login);
  await passwordInput.fill(String(password));
  await loginButton.click();
  await waitForTimeout(1000);
  const [linkElement] = await Promise.all([locator('#loginstatus')]);
  await expect(linkElement).toHaveText(`Welcome, ${login}!`);
});