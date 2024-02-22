// This function will generate random email address
function generateRandomEmail(domain: string = "mail.ru", length: number = 10): string {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < length; i++) {
        email += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return email + '@' + domain;
}

// Generating random username
function generateRandomUsername(length: number = 8): string {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let username = '';
    for (let i = 0; i < length; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return username;
}

// generating random password
function generateRandomPassword(length: number = 16): string {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

const randomEmail: string  = generateRandomEmail();
const randomUsername: string  = generateRandomUsername();
const randomPassword: string  = generateRandomPassword();

export const randomData = {
    randomEmail,
    randomUsername,
    randomPassword,
}