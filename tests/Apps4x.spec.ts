import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://apps4x.web.app/#/');
  });

  test.describe('Log in', () => {    

    test('User Should be able to log-in', async ({ page }) => {
        await expect(page.getByPlaceholder('UserName')).toBeVisible();
        await expect(page.getByPlaceholder('Password')).toBeVisible();
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('krishna');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('K$3182003FTS');
        await expect(page.getByRole('button', { name: 'SignIn' })).toBeVisible();
        await page.getByRole('button', { name: 'SignIn' }).click();
    });

    test('A popup message to show error "Invalid user Name and password"', async ({ page }) => {
        await expect(page.getByPlaceholder('UserName')).toBeVisible();
        await expect(page.getByPlaceholder('Password')).toBeVisible();
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('ram');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('K$3182003FTS');
        await expect(page.getByRole('button', { name: 'SignIn' })).toBeVisible();
        await page.getByRole('button', { name: 'SignIn' }).click();
        await expect(page.getByRole('heading', { name: 'InValid userId and password' })).toBeVisible();
        await expect(page.locator('#swal2-title')).toContainText('InValid userId and password');
        await page.getByRole('button', { name: 'OK' }).click();
    }); 

    test('A popup message to show error "Invalid user name and password"', async ({ page }) => {
        await expect(page.getByPlaceholder('UserName')).toBeVisible();
        await expect(page.getByPlaceholder('Password')).toBeVisible();
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('krishna');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('432156');
        await expect(page.getByRole('button', { name: 'SignIn' })).toBeVisible();
        await page.getByRole('button', { name: 'SignIn' }).click();
        await expect(page.getByRole('heading', { name: 'InValid userId and password' })).toBeVisible();
        await expect(page.locator('#swal2-title')).toContainText('InValid userId and password');
        await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
        await page.getByRole('button', { name: 'OK' }).click();
    });

    test(' A popup shows "Invalid userId or PW"', async ({ page })  => {
        await expect(page.getByPlaceholder('name')).toBeVisible();
        await expect(page.getByPlaceholder('Password')).toBeVisible();
        await page.getByPlaceholder('UserName').click();
        await page.getByPlaceholder('UserName').fill('ram');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('432156');
        await expect(page.getByRole('button', { name: 'SignIn' })).toBeVisible();
        await page.getByRole('button', { name: 'SignIn' }).click();
        await expect(page.getByRole('heading', { name: 'InValid userId and password' })).toBeVisible();
        await expect(page.locator('#swal2-title')).toContainText('InValid userId and password');
        await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
        await page.getByRole('button', { name: 'OK' }).click();
    });
  });