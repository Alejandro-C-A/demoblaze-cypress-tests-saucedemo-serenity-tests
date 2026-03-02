import { PageElement, By } from '@serenity-js/web';

export const CheckoutPage = {
  firstName: () =>
    PageElement.located(By.id('first-name')),

  lastName: () =>
    PageElement.located(By.id('last-name')),

  postalCode: () =>
    PageElement.located(By.id('postal-code')),

  continueButton: () =>
    PageElement.located(By.id('continue')),

  finishButton: () =>
    PageElement.located(By.id('finish')),
};