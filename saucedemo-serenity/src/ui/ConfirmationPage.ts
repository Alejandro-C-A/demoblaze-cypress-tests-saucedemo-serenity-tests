import { PageElement, By } from '@serenity-js/web';

export const ConfirmationPage = {
  confirmationMessage: () =>
    PageElement
      .located(By.css('.complete-header'))
      .describedAs('order confirmation message'),
};