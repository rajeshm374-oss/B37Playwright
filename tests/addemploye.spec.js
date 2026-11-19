import { test, expect } from '@playwright/test';
import logindata from '../testdata/login.json'

test('verify employee addition', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Rajesh');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('M');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Malari');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('heading', { name: 'Rajesh Malari' }).click();
  await expect(page.getByRole('heading', { name: 'Rajesh Malari' })).toBeVisible();
});