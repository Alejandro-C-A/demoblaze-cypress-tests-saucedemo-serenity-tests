import { PageElement, By } from '@serenity-js/web';

export const CartPage = {
  checkoutButton: () =>
    PageElement.located(By.id('checkout')),
};