import { test, expect } from '@playwright/test';
import {userEmail, userUsername, userPassword} from './github-tests/constants/user-data'
import {loginPageUrl, locators} from './github-tests/loginPage'
import {randomData} from './github-tests/helpers/utils'

// This scenario tests if user cannot log in to GitHub with incorrect email but correct password
test('GitHub unsuccessful login with incorrect email scenario', async ({ page }) => {
    // Navigate to github's login page
    await page.goto(loginPageUrl);

    // Fill in the email address
    await page.fill(locators.usernameField, randomData.randomEmail);

    // Fill in the password
    await page.fill(locators.passwordField, userPassword);

    // Click the sign-in button
    await page.click(locators.loginButton);

    // Check if the error message appeared on the screen indicating that username or password are incorrect.
    const errorMessageAppears = await page.isVisible(locators.errorMessage);
    expect(errorMessageAppears).toBeTruthy();
});

// This scenario tests if user cannot log in to GitHub with incorrect username but correct password
test('GitHub unsuccessful login with incorrect username scenario', async ({ page }) => {
    // Navigate to github's login page
    await page.goto(loginPageUrl);

    // Fill in the email address
    await page.fill(locators.usernameField, randomData.randomUsername);

    // Fill in the password
    await page.fill(locators.passwordField, userPassword);

    // Click the sign-in button
    await page.click(locators.loginButton);

    // Check if the error message appeared on the screen indicating that username or password are incorrect.
    const errorMessageAppears = await page.isVisible(locators.errorMessage);
    expect(errorMessageAppears).toBeTruthy();
});

// This scenario tests if user cannot log in to GitHub with correct username but incorrect password
test('GitHub unsuccessful login with correct username but incorrect password scenario', async ({ page }) => {
    // Navigate to github's login page
    await page.goto(loginPageUrl);

    // Fill in the email address
    await page.fill(locators.usernameField, userUsername);

    // Fill in the password
    await page.fill(locators.passwordField, randomData.randomPassword);

    // Click the sign-in button
    await page.click(locators.loginButton);

    // Check if the error message appeared on the screen indicating that username or password are incorrect.
    const errorMessageAppears = await page.isVisible(locators.errorMessage);
    expect(errorMessageAppears).toBeTruthy();
});

// This scenario tests if user cannot log in to GitHub with correct email but incorrect password
test('GitHub unsuccessful login with correct email but incorrect password scenario', async ({ page }) => {
    // Navigate to github's login page
    await page.goto(loginPageUrl);

    // Fill in the email address
    await page.fill(locators.usernameField, userEmail);

    // Fill in the password
    await page.fill(locators.passwordField, randomData.randomPassword);

    // Click the sign-in button
    await page.click(locators.loginButton);

    // Check if the error message appeared on the screen indicating that username or password are incorrect.
    const errorMessageAppears = await page.isVisible(locators.errorMessage);
    expect(errorMessageAppears).toBeTruthy();
});