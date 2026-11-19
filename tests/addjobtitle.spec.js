import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
 
  await page.getByRole('textbox').nth(1).fill("Job_" + Math.random().toString(36).substring(2, 18).slice(0, 16));
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('textbox').nth(1).press('ArrowDown');
  await page.getByRole('button', { name: 'Save' }).click();
});