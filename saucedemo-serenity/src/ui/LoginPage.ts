import { PageElement, By } from '@serenity-js/web';

export const LoginPage = {
  username: () =>
    PageElement.located(By.id('user-name')).describedAs('username field'),

  password: () =>
    PageElement.located(By.id('password')).describedAs('password field'),

  loginButton: () =>
    PageElement.located(By.id('login-button')).describedAs('login button'),
};