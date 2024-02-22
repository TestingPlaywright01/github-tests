import { test, expect } from '@playwright/test';
import {userEmail, userUsername, userPassword} from './github-tests/constants/user-data'
import {loginPageUrl, locators} from './github-tests/loginPage'
import {userLogo} from './github-tests/homePage'

// This scenario tests if user can successfully log in to GitHub with their valid credentials (email and password)
test('GitHub successful login with email scenario', async ({ page }) => {
  // Navigate to github's login page
  await page.goto(loginPageUrl);

  // Fill in the email address
  await page.fill(locators.usernameField, userEmail);

  // Fill in the password
  await page.fill(locators.passwordField, userPassword);

  // Click the sign-in button
  await page.click(locators.loginButton);

  // Check if the login was successful by looking for a user logo to appear on the page
  const userLogoExists = await page.isVisible(userLogo);
  expect(userLogoExists).toBeTruthy();
});

// This scenario tests if user can successfully log in to GitHub with their valid credentials (username and password)
test('GitHub successful login with username scenario', async ({ page }) => {
  // Navigate to github's login page
  await page.goto(loginPageUrl);

  // Fill in the email address
  await page.fill(locators.usernameField, userUsername);

  // Fill in the password
  await page.fill(locators.passwordField, userPassword);

  // Click the sign-in button
  await page.click(locators.loginButton);

  // Check if the login was successful by looking for a user logo to appear on the page
  const userLogoExists = await page.isVisible(userLogo);
  expect(userLogoExists).toBeTruthy();
});