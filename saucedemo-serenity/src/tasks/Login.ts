import { Task } from '@serenity-js/core';
import { Enter, Click } from '@serenity-js/web';
import { LoginPage } from '../ui/LoginPage';

export const Login = () =>
  Task.where(`#actor logs into the application`,
    Enter.theValue('standard_user').into(LoginPage.username()),
    Enter.theValue('secret_sauce').into(LoginPage.password()),
    Click.on(LoginPage.loginButton()),
  );