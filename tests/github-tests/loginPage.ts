export const loginPageUrl: string = "https://github.com/login";

//Locators

const usernameField: string = "input[name=\"login\"]";
const passwordField: string = "input[name=\"password\"]";
const loginButton: string = "input[name=\"commit\"]"
const signInWithPasskeyButton: string = ".login-callout.mt-3 .Button-content";
const errorMessage: string = "#js-flash-container .js-flash-alert";

export const locators = {
    usernameField,
    passwordField,
    loginButton,
    signInWithPasskeyButton,
    errorMessage,
}